import { hmrPlugin } from "@web/dev-server-hmr";

export default {
  http2: true,
  plugins: [process.env.NODE_ENV !== "production" && hmrPlugin()].filter(
    Boolean
  ),
};
