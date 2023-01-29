import { createElement } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(createElement);

createRoot(document.getElementById("root2")).render(html`<h1>world</h1>`);
