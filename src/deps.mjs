import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(createElement);

export { React, createRoot, html };
