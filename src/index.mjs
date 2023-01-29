import { html, createRoot } from "./deps.mjs";
import { Header } from "./components/Header.mjs";

let App = () =>
  html`<main>
    <${Header} />
  </main>`;

createRoot(document.getElementById("root")).render(html`<${App} />`);

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    App = module.App;
  });
}
