import { usePrisma } from "@/lib/hooks/usePrisma";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getTasks: publicProcedure.query(async () => {
    return await usePrisma.task.findMany({ orderBy: { id: "asc" } });
  }),
  createTask: publicProcedure.input(z.string()).mutation(async (opts) => {
    const addedTask = await usePrisma.task.create({
      data: { title: opts.input },
    });
    return addedTask;
  }),
});

export type AppRouter = typeof appRouter;
