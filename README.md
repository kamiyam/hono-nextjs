```
npm install
npm run dev
```

## Ref.

https://zenn.dev/eronghii/articles/9e1f0c73001f56

https://hono.dev/docs/helpers/factory#createfactory

## Node.js Adapter

@hono/node-server でも同じように使える様子

https://hono.dev/docs/getting-started/vercel#node-js

```diff
- import { handle } from "hono/vercel";
+ import { handle } from '@hono/node-server/vercel'

export const config: PageConfig = {
-  runtime: "edge"
+  api: {
+    bodyParser: false,
+  },
}
```
