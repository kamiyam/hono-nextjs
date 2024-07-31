import { type SampleEnv, middleware } from "@/server/middlewares/sample";
import { zValidator } from "@hono/zod-validator";
import { createFactory } from "hono/factory";
import { z } from "zod";

const schema = z.object({ id: z.string() });

export const handler = createFactory<SampleEnv>().createHandlers(
  middleware,
  zValidator("param", schema),
  async (c) => {
    console.info(c.var.sample);
    const { id } = c.req.valid("param");
    return c.json({
      message: `Hello, ${id}!`,
    });
  },
);
