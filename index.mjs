import { html, ReactDOMClient } from "./deps.mjs";
import { App } from "./components/App.mjs";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  html`<${App} />`
);
