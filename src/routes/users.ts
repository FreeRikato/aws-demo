import { prisma } from "@/lib/prisma";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  console.log(req.body);
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: { email, name },
  });

  res.json({ message: `[CREATED USER]: ${JSON.stringify(user, null, 2)}` });
});

userRouter.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  console.log("[LIST OF USERS]: ");

  res.json({ message: `[LIST OF USERS]: ${JSON.stringify(users, null, 2)}` });
});

export default userRouter;
