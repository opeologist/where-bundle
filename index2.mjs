import { html, createRoot, React } from "./deps.mjs";

const { StrictMode } = React;
let App = () => html`<${StrictMode}><h1>world</h1><//>`;

createRoot(document.getElementById("root2")).render(html`<${App} />`);

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    App = module.App;
  });
}
