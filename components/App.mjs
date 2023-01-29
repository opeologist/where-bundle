import { html } from "../deps.mjs";
import { Header } from "./Header.mjs";

export const App = () =>
  html` <main>
    <${Header} />
  </main>`;
