import { LitElement, html, css } from "lit-element";
import { debounce } from "./lib/debounce.js";
import "mv-dropdown";

export class MvSelect extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      value: { type: Object, attribute: false, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true, reflect: true },
      placeholder: { type: String, attribute: true },
      searchable: { type: Boolean, attribute: true },
      hasEmptyOption: { type: Boolean, attribute: "has-empty-option" },
      noClearButton: { type: Boolean, attribute: "no-clear-button" },
      emptyLabel: { type: String, attribute: "empty-label" },
      alwaysOpen: { type: Boolean, attribute: "always-open" },
      // TODO - multi-select not yet implemented
      multiSelect: { type: Boolean, attribute: "multi-select" },
      showInput: { type: Boolean, attribute: false, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --mv-dropdown-content-max-height: 150px;
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, #ffffff);
        --option-hover-background: var(
          --mv-select-option-hover-background,
          #1d9bc9
        );
        --option-hover-color: var(--mv-select-option-hover-color, #ffffff);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul > li {
        padding: var(--option-item-padding);
      }

      ul > li:hover {
        color: var(--option-hover-color);
        background-color: var(--option-hover-background);
        cursor: pointer;
      }

      .mv-select-input-group {
        display: block;
        border: 1px solid black;
        padding: 2px;
        border-radius: 5px;
        width: 100%;
      }

      .mv-select {
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: 0.25rem;
      }

      .mv-select > .trigger {
      }

      .mv-select > .content {
        display: block;
        border: 1px solid black;
        padding: 2px;
        border-radius: 5px;
        width: 100%;
        position: relative;
        overflow: auto;
        max-height: var(--mv-dropdown-content-max-height);
      }

      .mv-select-input-group {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }

      .mv-select-input {
        width: 100%;
      }

      .scrollbar {
        width: 100%;
        float: left;
        overflow-y: auto;
        margin: 0;
        /* fallback for firefox */
        scrollbar-color: #5a6473 #788394;
        scrollbar-width: thin;
        margin: var(--content-margin);
      }

      .scrollbar:focus {
        outline: transparent auto 0;
      }

      .scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }

      .scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }

      .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5a6473;
      }

      .scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1d9bc9 #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar {
        background-color: #1d9bc9;
      }

      .scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008fc3;
      }

      .hidden {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    `;
  }

  constructor() {
    super();
    this.emptyOption = {
      label: "- Select one -",
      value: null,
    };
    this.theme = "light";
    this.placeholder = "";
    this.value = null;
    this.options = [];
    this.searchable = false;
    this.open = false;
    this.showInput = false;
    this.alwaysOpen = false;
    this.hasEmptyOption = false;
    this.noClearButton = false;
    this.multiSelect = false;
  }

  renderInput = () => {
    const clearClass = this.noClearButton ? " no-clear" : "";
    const dropdownClass = this.alwaysOpen ? " no-dropdown" : "";
    const searchableClass = this.searchable ? "searchable" : "static";
    const inputClass = `mv-select-input ${searchableClass}${dropdownClass}${clearClass}`;
    const label = this.value ? this.value.label : "";
    const value = this.showInput ? "" : label;

    return this.showInput
      ? html`
          <input
            class="${inputClass}"
            .value="${value}"
            placeholder="${this.placeholder}"
          ></input>
        `
      : html`
          <slot name="custom-value">
            <div class=${inputClass}>${label}</div>
          </slot>
        `;
  };

  renderClearButton = () => {
    const dropdownClass = this.alwaysOpen ? " no-dropdown" : "";
    const clearButtonClass = `mv-select-clear-button${dropdownClass}`;

    return !this.noClearButton
      ? html`
          <slot name="custom-clear-button" class="mv-select-button">
            <button class="${clearButtonClass}" @click="${this.clearSearch}">
              &times;
            </button>
          </slot>
        `
      : html``;
  };

  renderDropArrow = () => {
    const open = this.open ? "open" : "close";
    const dropArrowClass = `mv-select-dropdown-button ${open}`;

    return !this.alwaysOpen
      ? html`
          <slot name="custom-dropdown-button" class="mv-select-button">
            <button class="${dropArrowClass}">&#9660;</button>
          </slot>
        `
      : html``;
  };

  renderInputGroup = () => {
    return html`
      <div
        class="mv-select-input-group"
        @click="${this.toggleDropdown}"
        @keyup="${this.handleKeyPress}"
      >
        ${this.renderInput()}${this.renderClearButton()}${this.renderDropArrow()}
      </div>
    `;
  };

  renderItem = (item) => {
    const selectedClass = item === this.value ? " selected" : "";
    const itemClass = `mv-select-item${selectedClass}`;
    return html`
      <li class="${itemClass}" @click="${this.selectItem(item)}">
        <slot name="custom-option">${item.label}</slot>
      </li>
    `;
  };

  renderOptions = () => {
    const options = this.hasEmptyOption
      ? [this.emptyOption, ...this.options]
      : this.options;
    const optionsClass = `mv-select-options${
      this.open && !this.alwaysOpen ? " open" : ""
    }`;

    return options.length > 0
      ? html`
          <ul class="${optionsClass}">
            ${options.map(this.renderItem)}
          </ul>
        `
      : html`
          <ul class="${optionsClass}">
            <li class="mv-select-item">
              <slot name="custom-empty-message">No available options</slot>
            </li>
          </ul>
        `;
  };

  render() {
    return this.alwaysOpen
      ? html`
          <div class="mv-select">
            <div class="trigger">${this.renderInputGroup()}</div>
            <div class="content ${this.theme} scrollbar">${this.renderOptions()}</div>
          </div>
        `
      : html`
          <mv-dropdown
            container
            .justify="${this.justify}"
            .position="${this.position}"
            .theme="${this.theme}"
          >
            <mv-dropdown trigger>${this.renderInputGroup()}</mv-dropdown>
            <mv-dropdown content .theme="${this.theme}">
              ${this.renderOptions()}
            </mv-dropdown>
          </mv-dropdown>
        `;
  }

  connectedCallback() {
    if (this.hasEmptyOption) {
      this.emptyOption.label = this.emptyLabel || "- Select one -";
      if (!this.value) {
        this.value = this.emptyOption;
      }
    }
    this.addEventListener("select-option", this.setValue);
    super.connectedCallback();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      if (!this.value && this.hasEmptyOption) {
        this.value = this.emptyOption;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  handleClickAway = () => {
    this.open = false;
    this.showInput = false;
  };

  handleKeyPress = debounce((originalEvent) => {
    const self = this;
    const { path, originalTarget } = originalEvent;
    const eventPath = path || originalEvent.composedPath();
    const [input] = eventPath;
    const { value } = input || originalTarget;
    self.dispatchEvent(
      new CustomEvent("on-search", { detail: { value, originalEvent } })
    );
  }, 300);

  toggleDropdown = (originalEvent) => {
    this.open = !this.open;
    if (this.searchable) {
      this.showInput = this.alwaysOpen ? true : this.open;
      const self = this;
      setTimeout(() => {
        const inputElement = self.shadowRoot.querySelector(".mv-select-input");
        inputElement.focus();
        self.dispatchEvent(
          new CustomEvent("on-search", {
            detail: { value: null, originalEvent },
          })
        );
      }, 0);
    }
  };

  setValue = (event) => {
    const {
      detail: { option },
    } = event;
    this.value = option;
    this.open = false;
    if (this.searchable) {
      this.showInput = false;
    }
  };

  selectItem = (option) => {
    const self = this;
    return () => {
      self.dispatchEvent(
        new CustomEvent("select-option", { detail: { option } })
      );
    };
  };

  clearSearch = (originalEvent) => {
    const inputElement = this.shadowRoot.querySelector(".mv-select-input");
    inputElement.value = "";
    this.dispatchEvent(
      new CustomEvent("on-clear", { detail: { originalEvent } })
    );
    inputElement.focus();
  };
}

customElements.define("mv-select", MvSelect);
