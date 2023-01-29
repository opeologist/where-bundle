import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { html, createRoot } from "./deps.mjs";
import { Header } from "./components/Header.mjs";

let App = () => html`<main>
  <${Header} />
</main>`;
const router = createBrowserRouter([
  {
    path: "/",
    element: html`<${App} />`,
  },
]);

createRoot(document.getElementById("root")).render(
  html`<${RouterProvider} router=${router} />`
);

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    App = module.App;
  });
}
