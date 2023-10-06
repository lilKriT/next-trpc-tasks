import { usePrisma } from "@/lib/hooks/usePrisma";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getTasks: publicProcedure.query(async () => {
    return await usePrisma.task.findMany({ orderBy: { id: "asc" } });
  }),
});

export type AppRouter = typeof appRouter;
