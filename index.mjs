import { html, createRoot, React } from "./deps.mjs";
import { Header } from "./components/Header.mjs";

const { StrictMode } = React;
let App = () =>
  html`<${StrictMode}>
    <main>
      <${Header} />
    </main>
  <//>`;

createRoot(document.getElementById("root")).render(html`<${App} />`);

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    App = module.App;
  });
}
