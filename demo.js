import { LitElement, html, css } from "lit-element";
import "./mv-select.js";

export class MvSelectDemo extends LitElement {
  static get properties() {
    return {
      options: { type: Array, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `;
  }

  constructor() {
    super();
    this.options = [
      {
        label: "Option 1",
        value: "option1"
      },
      {
        label: "Option 2",
        value: "option2"
      },
      {
        label: "Option 3",
        value: "option3"
      },
      {
        label: "Option 4",
        value: "option4"
      },
      {
        label: "Option 5",
        value: "option5"
      },
      {
        label: "Option 6",
        value: "option6"
      },
      {
        label: "Option 7",
        value: "option7"
      },
      {
        label: "Option 8",
        value: "option8"
      },
      {
        label: "Option 9",
        value: "option9"
      }
    ];
  }

  render() {
    return html`
      <mv-select .options="${this.options}"></mv-select>
    `;
  }
}

customElements.define("mv-select-demo", MvSelectDemo);
