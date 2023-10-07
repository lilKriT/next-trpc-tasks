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
  deleteTask: publicProcedure.input(z.number()).mutation(async (opts) => {
    const deletedTask = await usePrisma.task.delete({
      where: { id: opts.input },
    });
    return deletedTask;
  }),
});

export type AppRouter = typeof appRouter;
