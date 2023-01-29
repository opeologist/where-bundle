import React from "react";
import ReactDOMClient from "react-dom/client";
import htm from "htm";

const html = htm.bind(React.createElement);

export { React, ReactDOMClient, html };
