import express from "express";
import { prisma } from "@/lib/prisma";
import healthRouter from "@/routes/health";
import userRouter from "@/routes/users";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.use(healthRouter);

app.use("/users", userRouter);

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
