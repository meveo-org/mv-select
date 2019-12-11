import { LitElement, html, css } from "lit-element";

export class MvSelect extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: false, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true, reflect: true },
      search: { type: Boolean, attribute: true },
      alwaysOpen: { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return css`
			:host {
        user-select: none;
				--mv-select-font-family: var(--font-family, Arial);
				--mv-select-font-size: var(--font-size-m, 16px);
        --color: var(--mv-select-color, #777);
        --max-width: var(--mv-select-max-width, 200px);
        --border: var(--mv-select-border, 1px solid #ccc);
        --border-radius: var(--mv-select-border-radius, 5px);
        --dropdown-icon-button-margin: var(--mv-select-dropdown-icon-button-margin, 4px);
        --dropdown-icon-size: var(--mv-select-dropdown-icon-size, var(--mv-select-font-size));
        --dropdown-icon-button-size: calc(var(--dropdown-icon-size) + var(--dropdown-icon-button-margin));
        --dropdown-icon-button-color: var(--mv-select-dropdown-icon-button-color, var(--color));
        --option-max-height: var(--mv-select-option-max-height, 250px);
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, transparent);
        --option-hover-background: var(--mv-select-option-hover-background, #1D9BC9);
        --option-hover-color: var(--mv-select-option-hover-color, #FFFFFF);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
      }

      .mv-select-container {
        max-width: var(--max-width);
      }

      .mv-select-input-group {
        position: relative;
        border: var(--border);
        border-radius: var(--border-radius);
      }

      .mv-select-input {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: 0;
        width: calc(100% - var(--dropdown-icon-button-size));
        box-sizing: border-box;
        outline: none;
        padding: 5px;
      }

      .mv-select-dropdown-button {
        top: 0;
        right: 0;
        border: 0;
        padding:0;
        background: transparent;
        position: absolute;
        outline: none;
        height: 100%;
        margin: auto var(--dropdown-icon-button-margin);
        font-size: var(--dropdown-icon-size);
        width: var(--dropdown-icon-button-size);
        color: var(--dropdown-icon-button-color);
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
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: var(--border);
        border-radius: var(--border-radius);
        max-height: var(--option-max-height);
        overflow: auto;
        display: block;
        left: 0;
        padding:5px 0;
        position:relative;
        top: 2px;
        width:auto;
        list-style:none;
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
    this.search = true;
    this.open = false;
    this.alwaysOpen = false;
  }

  render() {
    const inputClass = `mv-select-input ${this.search ? "search" : "static"}`;
    return html`
    <div class="mv-select-container">
      <div class="mv-select-input-group">
        <input
          class="${inputClass}"
          .value="${this.value.label}"
          @focusin="${this.openOptions}"
          @focusout="${this.closeOptions}"
        ></input>
        ${!this.alwaysOpen
          ? html`
            <button
              class="mv-select-dropdown-button"
              @click="${this.clickButton}"
            >&#9660;</button>
          `
          : html``}
      </div>
      ${this.open || this.alwaysOpen
        ? html`
          <div class="mv-select-options">
            ${this.options.map(
              item => html`
                <div class="mv-select-item" @click="${this.selectItem(item)}">
                  ${item.label}
                </div>
              `
            )}
          </div>
        `
        : html``}
      </div>
    `;
  }

  connectedCallback() {
    this.addEventListener("select-option", this.setValue);
    if (!this.alwaysOpen) {
      this.addEventListener("toggle-options", this.toggleOptions);
    }
    super.connectedCallback();
  }

  toggleOptions = event => {
    if (!this.alwaysOpen) {
      const { detail: { open } } = event;
      this.open = open;
    }
  };

  clickButton = () => {
    if (!this.open) {
      const input = this.shadowRoot.querySelector(".mv-select-input");
      input.focus();
    } else {
      this.open = false;
    }
  };

  clickInput = () => {
    if (!this.search && !this.alwaysOpen) {
      this.open = !this.open;
      if (this.open) {
        const selectGroup = this.shadowRoot.querySelector(
          ".mv-select-container"
        );
        selectGroup.focus();
      }
    }
  };

  openOptions = () => {
    this.dispatchEvent(
      new CustomEvent("toggle-options", {
        detail: { open: true },
        bubbles: true
      })
    );
  };

  closeOptions = () => {
    const self = this;
    setTimeout(() => {
      self.dispatchEvent(
        new CustomEvent("toggle-options", {
          detail: { open: false },
          bubbles: true
        })
      );
    }, 200);
  };

  setValue = event => {
    const { detail: { value } } = event;
    this.value = value;
    if (!this.search && !this.alwaysOpen) {
      this.open = false;
    }
  };

  selectItem = item => {
    const self = this;
    return () => {
      self.dispatchEvent(
        new CustomEvent("select-option", {
          detail: { value: item },
          bubbles: true
        })
      );
    };
  };
}

customElements.define("mv-select", MvSelect);
