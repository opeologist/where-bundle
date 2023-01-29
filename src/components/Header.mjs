import { html, React } from "../deps.mjs";

const { useState } = React;

export const Header = () => {
  const [isOn, setIsOn] = useState(true);

  return html`<header>
    <h1>asdf</h1>
    <button onClick=${() => setIsOn(!isOn)}>${isOn ? "on" : "off"}</button>
  </header>`;
};
