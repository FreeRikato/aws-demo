import { prisma } from "@/lib/prisma";
import { Router } from "express";

const router = Router();

router.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "connected" });
  } catch {
    res.status(503).json({ status: "degraded", db: "disconnected" });
  }
});

export default router;
