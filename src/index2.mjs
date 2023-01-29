import { html, createRoot } from "./deps.mjs";

let App = () => html`<h1>world</h1>`;

createRoot(document.getElementById("root2")).render(html`<${App} />`);

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    App = module.App;
  });
}
