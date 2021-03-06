import { LitElement, html, css } from "lit-element";
import { debounce } from "./lib/debounce.js";
import "mv-click-away";

export class MvSelect extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: true, reflect: true },
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
      showInput: { type: Boolean, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        user-select: none;
        --mv-select-font-family: var(--font-family, Arial);
        --mv-select-font-size: var(--font-size-m, 16px);
        --color: var(--mv-select-color, #777);
        --width: var(--mv-select-width, 200px);
        --input-padding: var(--mv-select-input-padding, 4px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: calc(var(--mv-select-font-size) + var(--outside-padding));
        --input-height: var(--max-height);
        --total-height: calc(var(--max-height) + var(--outside-padding));
        --full-height: calc(var(--total-height) + 2px);
        --border: var(--mv-select-border, 1px solid #4e686d);
        --border-radius: var(--mv-select-border-radius, 5px);
        --clear-icon-size: var(
          --mv-select-clear-icon-size,
          var(--mv-select-font-size)
        );
        --dropdown-icon-button-margin: var(--input-padding);
        --dropdown-icon-size: var(
          --mv-select-dropdown-icon-size,
          calc(var(--mv-select-font-size) * 0.75)
        );
        --dropdown-icon-button-size: calc(
          var(--dropdown-icon-size) + var(--dropdown-icon-button-margin)
        );
        --dropdown-icon-total-width: calc(
          var(--dropdown-icon-button-size) + var(--input-padding)
        );
        --button-section-width: calc(var(--dropdown-icon-total-width) * 2);
        --dropdown-icon-button-color: var(
          --mv-select-dropdown-icon-button-color,
          var(--color)
        );
        --option-max-height: var(--mv-select-option-max-height, 250px);
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, #ffffff);
        --option-hover-background: var(
          --mv-select-option-hover-background,
          #1d9bc9
        );
        --option-hover-color: var(--mv-select-option-hover-color, #ffffff);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
      }

      .mv-select {
        position: relative;
        width: var(--width);
        min-height: var(--full-height);
      }

      .mv-select-contents {
        display: block;
        position: absolute;
        width: var(--width);
        height: var(--full-height);
      }

      .mv-select-contents.always-open {
        position: relative;
        height: unset;
      }

      .mv-select-input-group {
        position: relative;
        display: grid;
        align-items: center;
        justify-items: start;
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
        outline: none;
        min-height: var(--input-height);
        max-height: var(--input-height);
        line-height: var(--input-height);
        width: calc(100% - var(--button-section-width));
      }

      .mv-select-input.no-clear,
      .mv-select-input.no-dropdown {
        width: calc(100% - var(--dropdown-icon-button-size));
      }

      .mv-select-button > * {
        border: 0;
        padding: 0;
        position: absolute;
        height: 100%;
        cursor: pointer;
      }

      .mv-select-dropdown-button {
        top: 0;
        right: 0;
        font-size: var(--dropdown-icon-size);
      }

      .mv-select-clear-button,
      .mv-select-dropdown-button {
        background: transparent;
        outline: none;
        margin: auto var(--dropdown-icon-button-margin);
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

      .mv-select-clear-button {
        top: 0;
        right: var(--dropdown-icon-total-width);
        font-size: var(--clear-icon-size);
      }

      .mv-select-clear-button.no-dropdown {
        top: 0;
        right: 0;
      }

      .mv-select-input.static {
        user-select: none;
        background: transparent;
        padding: auto;
      }

      .mv-select-input.static:hover {
        cursor: pointer;
      }

      .mv-select-input.searchable:hover {
        cursor: text;
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
        width: auto;
        list-style: none;
        z-index: 0;
      }

      .mv-select-options.open {
        box-shadow: 3px 3px 10px 0px rgba(58, 58, 58, 0.6);
        z-index: 10;
      }

      .mv-select-item {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        padding: var(--option-item-padding);
        display: block;
      }

      .mv-select-item.selected,
      .mv-select-item.highlight,
      .mv-select-item:hover {
        background: var(--option-hover-background);
        color: var(--option-hover-color);
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.emptyOption = {
      label: "- Select one -",
      value: null
    };
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

  render() {
    const alwaysOpen = this.alwaysOpen;
    const options = this.hasEmptyOption
      ? [this.emptyOption, ...this.options]
      : this.options;
    const clearClass = this.noClearButton ? " no-clear" : "";
    const dropdownClass = alwaysOpen ? " no-dropdown" : "";
    const searchableClass = this.searchable ? "searchable" : "static";
    const inputClass = `mv-select-input ${searchableClass}${dropdownClass}${clearClass}`;
    const clearButtonClass = `mv-select-clear-button${dropdownClass}`;
    const dropdownButtonClass = `mv-select-dropdown-button ${
      this.open ? "open" : "close"
    }`;
    const optionsClass = `mv-select-options${
      this.open && !alwaysOpen ? " open" : ""
    }`;
    const label = this.value ? this.value.label : "";
    const value = this.showInput ? "" : label;

    return html`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <div class="mv-select">
          <div class="mv-select-contents${alwaysOpen ? " always-open" : ""}">
            <div
              class="mv-select-input-group"
              @click="${this.toggleDropdown}"
              @keyup="${this.handleKeyPress}"
            >
              ${this.showInput
                ? html`
                  <input
                    class="${inputClass}"
                    .value="${value}"
                    placeholder="${this.placeholder}"
                  ></input>
                `
                : html`
                    <slot name="custom-value">
                      <div class=${inputClass}>
                        ${label}
                      </div>
                    </slot>
                  `}
              ${!this.noClearButton
                ? html`
                    <slot name="custom-clear-button" class="mv-select-button">
                      <button
                        class="${clearButtonClass}"
                        @click="${this.clearSearch}"
                      >
                        &times;
                      </button>
                    </slot>
                  `
                : html``}
              ${!alwaysOpen
                ? html`
                    <slot
                      name="custom-dropdown-button"
                      class="mv-select-button"
                    >
                      <button class="${dropdownButtonClass}">&#9660;</button>
                    </slot>
                  `
                : html``}
            </div>
            ${this.open || alwaysOpen
              ? html`
                  ${options.length > 0
                    ? html`
                        <ul class="${optionsClass}">
                          ${options.map(item => {
                            const selectedClass =
                              item === this.value ? " selected" : "";
                            const itemClass = `mv-select-item${selectedClass}`;
                            return html`
                              <li
                                class="${itemClass}"
                                @click="${this.selectItem(item)}"
                              >
                                <slot name="custom-option">${item.label}</slot>
                              </li>
                            `;
                          })}
                        </ul>
                      `
                    : html`
                        <ul class="${optionsClass}">
                          <li class="mv-select-item">
                            <slot name="custom-empty-message"
                              >No available options</slot
                            >
                          </li>
                        </ul>
                      `}
                `
              : html``}
          </div>
        </div>
      </mv-click-away>
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

  handleKeyPress = debounce(originalEvent => {
    const self = this;
    const { path, originalTarget } = originalEvent;
    const eventPath = path || originalEvent.composedPath();
    const [input] = eventPath;
    const { value } = input || originalTarget;
    self.dispatchEvent(
      new CustomEvent("on-search", { detail: { value, originalEvent } })
    );
  }, 300);

  toggleDropdown = originalEvent => {
    this.open = !this.open;
    if (this.searchable) {
      this.showInput = this.alwaysOpen ? true : this.open;
      const self = this;
      setTimeout(() => {
        const inputElement = self.shadowRoot.querySelector(".mv-select-input");
        inputElement.focus();
        self.dispatchEvent(
          new CustomEvent("on-search", {
            detail: { value: null, originalEvent }
          })
        );
      }, 0);
    }
  };

  setValue = event => {
    const {
      detail: { option }
    } = event;
    this.value = option;
    this.open = false;
    if (this.searchable) {
      this.showInput = false;
    }
  };

  selectItem = option => {
    const self = this;
    return () => {
      self.dispatchEvent(
        new CustomEvent("select-option", { detail: { option } })
      );
    };
  };

  clearSearch = originalEvent => {
    const inputElement = this.shadowRoot.querySelector(".mv-select-input");
    inputElement.value = "";
    this.dispatchEvent(
      new CustomEvent("on-clear", { detail: { originalEvent } })
    );
    inputElement.focus();
  };
}

customElements.define("mv-select", MvSelect);
