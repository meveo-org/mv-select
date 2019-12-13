import { LitElement, html, css } from "lit-element";
import "./mv-select.js";

export class MvSelectDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: false, reflect: true },
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
    this.value = {};
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
      <h3>Default</h3>
      <mv-select
        .options="${this.options}"
        @select-option="${this.displayValue("default")}"
      ></mv-select>
      <pre>${this.value.default || "{}"}</pre>
      
      <h3>Searchable</h3>
      <mv-select
        .options="${this.options}"
        @select-option="${this.displayValue("searchable")}"
        search
      ></mv-select>
      <pre>${this.value.searchable || "{}"}</pre>

      <h3>Always open</h3>
      <mv-select
        .options="${this.options}"
        @select-option="${this.displayValue("alwaysOpen")}"
        always-open
      ></mv-select>
      <pre>${this.value.alwaysOpen || "{}"}</pre>
    `;
  }

  displayValue = name => {
    return event => {
      const { detail: { option } } = event;
      this.value = { ...this.value, [name]: JSON.stringify(option, null, 2) };
    };
  };
}

customElements.define("mv-select-demo", MvSelectDemo);
