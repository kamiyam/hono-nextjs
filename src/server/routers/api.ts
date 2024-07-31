import { handler as helloHandlers } from "@/server/handlers/hello";
import { handler as userHandlers } from "@/server/handlers/user";
import { Hono } from "hono";

export const apiRouter = new Hono()
  .basePath("/api")
  .get("/hello/:id", ...helloHandlers)
  .post("/user", ...userHandlers);
