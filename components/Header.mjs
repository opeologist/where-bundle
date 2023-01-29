import { html, React } from "../deps.mjs";

const { useState } = React;

export const Header = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return html`<header>
    <h1>asdf</h1>
    <button disabled=${isDisabled} onClick=${() => setIsDisabled(!isDisabled)}>
      disable me
    </button>
  </header>`;
};
