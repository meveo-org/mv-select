import { LitElement, html, css } from "lit-element";

export class MvSelect extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: false, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true, reflect: true },
      searchable: { type: Boolean, attribute: true },
      "always-open": { type: Boolean, attribute: true },
      "multi-select": { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return css`
			:host {
        user-select: none;
				--mv-select-font-family: var(--font-family, Arial);
				--mv-select-font-size: var(--font-size-m, 10pt);
        --color: var(--mv-select-color, #777);
        --width: var(--mv-select-width, 200px);
        --input-padding: var(--mv-select-input-padding, 4px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: calc(var(--mv-select-font-size) + var(--outside-padding));
        --input-height: var(--max-height);
        --border: var(--mv-select-border, 1px solid #ccc);
        --border-radius: var(--mv-select-border-radius, 5px);
        --dropdown-icon-button-margin: var(--input-padding);
        --dropdown-icon-size: var(--mv-select-dropdown-icon-size, calc(var(--mv-select-font-size) * 0.75));
        --dropdown-icon-button-size: calc(var(--dropdown-icon-size) + var(--dropdown-icon-button-margin));
        --dropdown-icon-button-color: var(--mv-select-dropdown-icon-button-color, var(--color));
        --option-max-height: var(--mv-select-option-max-height, 250px);
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, #FFFFFF);
        --option-hover-background: var(--mv-select-option-hover-background, #1D9BC9);
        --option-hover-color: var(--mv-select-option-hover-color, #FFFFFF);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
      }

      .mv-select {
        width: var(--width);        
      }

      .mv-select-contents {
        position: absolute;
        width: var(--width);
        height: var(--max-height);
      }

      .mv-select-contents.always-open {
        position: relative;
        height: unset;
      }

      .mv-select-input-group {
        position: relative;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        max-height: var(--max-height);
        padding: var(--input-padding);
      }

      .mv-select-input {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: 0;
        width: calc(100% - var(--dropdown-icon-button-size));
        box-sizing: border-box;
        outline: none;
        min-height: var(--input-height);
        max-height: var(--input-height);
      }

      .mv-select-button > * {
        top: 0;
        right: 0;
        border: 0;
        padding:0;
        position: absolute;
        height: 100%;
      }

      .mv-select-dropdown-button {        
        background: transparent;        
        outline: none;        
        margin: auto var(--dropdown-icon-button-margin);
        font-size: var(--dropdown-icon-size);
        width: var(--dropdown-icon-button-size);
        color: var(--dropdown-icon-button-color);
      }

      .mv-select-dropdown-button.close {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;        
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }

      .mv-select-dropdown-button.open {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;        
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .mv-select-input.static {
        user-select: none;
        background: transparent;
      }

      .mv-select-dropdown-button,
      .mv-select-input.static:hover {
        cursor: pointer;
      }

      .mv-select-options {
        margin: 0;
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: var(--border);
        border-radius: var(--border-radius);
        max-height: var(--option-max-height);
        background: var(--option-background);
        overflow: auto;
        display: block;
        left: 0;
        padding: 5px 0;
        position: relative;
        top: 2px;
        width:auto;
        list-style:none;
        z-index: 0;
      }

      .mv-select-options.open {
        box-shadow: 3px 3px 10px 0px rgba(58,58,58,0.6);
        z-index: 10;
      }

      .mv-select-item {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        padding: var(--option-item-padding);
        display: block;
      }

      .mv-select-item:hover {
        background: var(--option-hover-background);
        color: var(--option-hover-color);
        cursor: pointer;
      }
		`;
  }

  constructor() {
    super();
    this.value = { label: "" };
    this.options = [];
    this.searchable = false;
    this.open = false;
    this["always-open"] = false;
    this["multi-select"] = false;
  }

  render() {
    const alwaysOpen = this["always-open"];
    const inputClass = `mv-select-input ${this.searchable
      ? "searchable"
      : "static"}`;
    const buttonClass = `mv-select-dropdown-button ${this.open
      ? "open"
      : "close"}`;
    const optionClass = `mv-select-options${this.open && !alwaysOpen
      ? " open"
      : ""}`;
    return html`
      <div class="mv-select">
        <div class="mv-select-contents${alwaysOpen ? " always-open" : ""}">
          <div class="mv-select-input-group">
            ${this.searchable && this.open
              ? html`
                <input
                  class="${inputClass}"
                  .value="${this.value.label}"
                ></input>
              `
              : html`
                <div class=${inputClass}>
                  <slot name="custom-value">
                    ${this.value.label}
                  </slot>
                </div>
              `}        
            ${!alwaysOpen
              ? html`
                <slot name="custom-button" class="mv-select-button">
                  <button class="${buttonClass}">&#9660;</button>
                </slot>
              `
              : html``}
          </div>
          ${this.open || alwaysOpen
            ? html`
              <ul class="${optionClass}">
                ${this.options.map(
                  item => html`
                    <li class="mv-select-item" @click="${this.selectItem(
                      item
                    )}">
                      <slot name="custom-option">${item.label}</slot>
                    </li>
                  `
                )}
              </ul>
            `
            : html``}
          </div>
        </div>
    `;
  }

  connectedCallback() {
    if (!this["always-open"]) {
      document.addEventListener("click", this.handleClickAway);
    }
    this.addEventListener("select-option", this.setValue);
    super.connectedCallback();
  }

  detachedCallback() {
    if (!this["always-open"]) {
      document.removeEventListener("click", this.handleClickAway);
    }
    super.detachedCallback();
  }

  handleClickAway = event => {
    const { path } = event;
    const clickedAway = !(path || []).some(node => node === this);
    if (!clickedAway) {
      this.open = !this.open;
    } else {
      this.open = false;
    }
  };

  setValue = event => {
    const { detail: { option } } = event;
    this.value = option;
    const shouldCloseOptions = !this["multi-select"] && !this["always-open"];
    this.open = shouldCloseOptions;
  };

  selectItem = option => {
    const self = this;
    return () => {
      self.dispatchEvent(
        new CustomEvent("select-option", { detail: { option } })
      );
    };
  };
}

customElements.define("mv-select", MvSelect);
