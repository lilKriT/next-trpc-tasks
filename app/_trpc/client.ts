import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server"; // you can put type inside the brackets or not

export const trpc = createTRPCReact<AppRouter>({});
