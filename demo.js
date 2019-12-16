import { LitElement, html, css } from "lit-element";
import "mv-button";
import "mv-container";
import "mv-linear-icons";
import "mv-font-awesome";
import "mv-toast";

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

      label {
        display: block;
        margin-bottom: 5px;
        font-size: 1.2em;
        font-weight: bold;
      }

      mv-container {
        --mv-container-min-width: 780px;
        --mv-container-max-width: 780px;
      }

      mv-button {
        --mv-button-padding: 10px 15px;
      }

      mv-select {
        height: 34px;
      }

      .contents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-gap: 20px;
      }

      .default-select-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    `;
  }

  constructor() {
    super();
    this.value = {};
    this.options = [
      {
        label: html`<mv-fa icon="smile" regular></mv-fa> Option 1`,
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
      <mv-container>
        <div class="contents">
          <div class="input-group">            
            <label>Default</label>
            <div class="default-select-container">
              <mv-select
                .value="${this.value.default || {}}"
                .options="${this.options}"
                @select-option="${this.displayValue("default")}"
              ></mv-select>            
              <mv-button
                button-style="error"
                @button-clicked="${this.clearDefaultValue}"
              ><mv-fa icon="times"></mv-fa></mv-button>
            </div>
          </div>
          <div class="message">
            <mv-toast type="information" .closeable="${false}">
              <h4>Default type selected value:</h4>
              <pre>${(this.value &&
                this.value.default &&
                this.value.default.value) ||
                "{}"}</pre>
            </mv-toast>
          </div>
          
          <div class="input-group">
            <label>Searchable</label>
            <mv-select
              .options="${this.options}"
              @select-option="${this.displayValue("searchable")}"
              searchable
            ></mv-select>
          </div>
          <div class="message">
            <mv-toast type="information" .closeable="${false}">
              <h4>Searchable type selected value:</h4>
              <pre>${(this.value &&
                this.value.searchable &&
                this.value.searchable.value) ||
                "{}"}</pre>
            </mv-toast>
          </div>

          <div class="input-group">
            <label>Always open</label>
            <mv-select
              .options="${this.options}"
              @select-option="${this.displayValue("alwaysOpen")}"
              always-open
            ></mv-select>
          </div>
          <div class="message">
            <mv-toast type="information" .closeable="${false}">
              <h4>Always open type selected value:</h4>
              <pre>${(this.value &&
                this.value.alwaysOpen &&
                this.value.alwaysOpen.value) ||
                "{}"}</pre>
            </mv-toast>
          </div>
        </div>
      </mv-container>
    `;
  }

  displayValue = name => {
    return event => {
      const { detail: { option } } = event;
      this.value = { ...this.value, [name]: option };
    };
  };

  // this is a sample function for changing the value of the component
  // from the parent component.
  clearDefaultValue = () => {
    this.value = { ...this.value, default: null };
  };
}

customElements.define("mv-select-demo", MvSelectDemo);
