import { apiRouter } from "@/server/routers/api";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import type { PageConfig } from "next";

export const config: PageConfig = {
  runtime: "edge",
};

const app = new Hono();
app.get("/api/sample", async (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});
app.route("/", apiRouter);

export default handle(app);
