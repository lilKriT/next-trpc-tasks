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
  editTask: publicProcedure
    .input(
      z.object({
        id: z.number(),
        task: z
          .object({
            title: z.string(),
            completed: z.boolean(),
          })
          .partial(),
      })
    )
    .mutation(async (opts) => {
      const editedTask = await usePrisma.task.update({
        where: { id: opts.input.id },
        data: {
          title: opts.input.task.title,
          completed: opts.input.task.completed,
        },
      });

      return editedTask;
    }),
  deleteTask: publicProcedure.input(z.number()).mutation(async (opts) => {
    const deletedTask = await usePrisma.task.delete({
      where: { id: opts.input },
    });
    return deletedTask;
  }),
});

export type AppRouter = typeof appRouter;
