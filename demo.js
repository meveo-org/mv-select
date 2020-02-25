import { LitElement, html, css } from "lit-element";
import "mv-button";
import "mv-container";
import "mv-linear-icons";
import "mv-font-awesome";
import "mv-toast";

import "./mv-select.js";

const ALL_OPTIONS = [
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
    label: "Option 12",
    value: "option12"
  },
  {
    label: "Option 23",
    value: "option23"
  },
  {
    label: "Option 13",
    value: "option13"
  },
  {
    label: "Option 22",
    value: "option22"
  },
  {
    label: "Option 33",
    value: "option33"
  }
];

export class MvSelectDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: false, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
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
        --mv-button-padding: 8px 12px;
        --mv-button-margin: 0 5px;
        --mv-button-min-width: 50px;
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

      .message {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;     
        text-transform: uppercase;
      }
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.value = {};
    this.options = {
      default: null,
      searchable: null,
      alwaysOpen: null
    };
    this.theme = "light";
    this.open = true;
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    const textColor = `color: ${this.open ? "" : "#FFFFFF"}`;
    const toastTheme = this.open ? "dark" : "light";
    return html`
      <div class="theme">
        <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
      </div>
      <mv-container .theme="${this.theme}">
        <div class="contents">
          <div class="input-group">            
            <label style="${textColor}">Default</label>
            <div class="default-select-container">
              <mv-select
                .value="${this.value.default}"
                .options="${this.options.default}"
                @select-option="${this.displayValue("default")}"
                has-empty-option
                no-clear-button
              ></mv-select>            
              <mv-button
                button-style="error"
                @button-clicked="${this.clearValue("default")}"
              ><mv-fa icon="times"></mv-fa></mv-button>
            </div>
          </div>
          <div>
            <mv-toast type="information" .closeable="${false}" .theme="${toastTheme}">
              <h4>Default type selected value:</h4>
              <div class="message">${this.value &&
                this.value.default &&
                this.value.default.label}</div>
            </mv-toast>
          </div>
          
          <div class="input-group">
            <label style="${textColor}">Searchable</label>
            <mv-select
              .value="${this.value.searchable}"
              .options="${this.options.searchable}"
              @select-option="${this.displayValue("searchable")}"
              @on-search="${this.searchValue("searchable")}"
              @on-clear="${this.clearValue("searchable")}"
              searchable
            ></mv-select>
          </div>
          <div>
            <mv-toast type="information" .closeable="${false}" .theme="${toastTheme}">
              <h4>Searchable type selected value:</h4>
              <div class="message">${this.value &&
                this.value.searchable &&
                this.value.searchable.label}</div>
            </mv-toast>
          </div>

          <div class="input-group">
            <label style="${textColor}">Always open</label>
            <mv-select
              .value="${this.value.alwaysOpen}"
              .options="${this.options.alwaysOpen}"
              @select-option="${this.displayValue("alwaysOpen")}"
              @on-search="${this.searchValue("alwaysOpen")}"
              @on-clear="${this.clearValue("alwaysOpen")}"
              always-open
              searchable
            ></mv-select>
          </div>
          <div>
            <mv-toast type="information" .closeable="${false}" .theme="${toastTheme}">
              <h4>Always open type selected value:</h4>
              <div class="message">${this.value &&
                this.value.alwaysOpen &&
                this.value.alwaysOpen.label}</div>
            </mv-toast>
          </div>
        </div>
      </mv-container>
    `;
  }

  connectedCallback() {
    this.options = Object.keys(this.options).reduce(
      (options, key) => ({ ...options, [key]: this.resetOptions() }),
      {}
    );
    super.connectedCallback();
  }

  resetOptions = () => [...ALL_OPTIONS.map(option => ({ ...option }))];

  displayValue = name => {
    return event => {
      const { detail: { option } } = event;
      this.value = { ...this.value, [name]: option };
    };
  };

  searchValue = name => {
    return event => {
      const { detail: { value } } = event;
      this.options = {
        ...this.options,
        [name]: ALL_OPTIONS.filter(option => {
          const searchableLabel =
            option.label.type === "html"
              ? new DOMParser()
                  .parseFromString(option.label.strings[0], "text/html")
                  .body.textContent.trim()
              : option.label;
          if (!!value) {
            return (
              searchableLabel.includes(value) || option.value.includes(value)
            );
          }
          return option;
        })
      };
    };
  };

  // this is a sample function for changing the value of the component
  // from the parent component.
  clearValue = name => {
    const self = this;
    return ({ detail }) => {
      const { originalEvent } = detail || {};
      if (originalEvent) {
        originalEvent.stopPropagation();
      }
      self.value = { ...self.value, [name]: null };
      self.options = { ...self.options, [name]: this.resetOptions() };
    };
  };

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-select-demo", MvSelectDemo);
