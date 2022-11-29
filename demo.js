import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'
import '@meveo-org/mv-linear-icons'
import '@meveo-org/mv-font-awesome'
import '@meveo-org/mv-toast'

import './mv-select.js'

// We can have an infinite levels of nested options here
const MULTI_LEVEL_OPTIONS = [
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      {
        label: 'Child Option 1.1',
        value: 'option1.childOpt1',
      },
      {
        label: 'Child Option 1.2',
        value: 'option1.childOpt2',
      },
    ],
  },
  {
    label: 'Option 2',
    value: 'option2',
    children: [
      {
        label: 'Child Option 2.1',
        value: 'option2.childOpt1',
        children: [
          {
            label: 'Child option 2.1.1',
            value: 'option2.childOpt1.childOpt1',
          },
        ],
      },
    ],
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

const ALL_OPTIONS = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

export class MvSelectDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: false, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      theme: { type: String, attribute: true },
    }
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6px;
        --mv-select-border: 1px solid #4e686d;
      }

      mv-container label {
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

      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
      }

      .contents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-gap: 20px;
      }

      .default-select-container {
        display: grid;
        grid-template-columns: auto 50px;
        align-items: center;
      }

      .message {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }
      .default-select-container {
        align-items: first baseline;
      }
    `
  }

  constructor() {
    super()
    this.value = {}
    this.options = {
      default: null,
      searchable: null,
      alwaysOpen: null,
      multiSelect: null,
    }
    this.theme = 'light'
  }

  render() {
    const { theme } = this
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked
            @change="${this.changeTheme}"
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            @change="${this.changeTheme}"
          />
          Dark
        </label>
      </fieldset>
      <mv-container .theme="${theme}">
        <div class="contents">
          <div class="input-group">
            <label>Default</label>
            <div class="default-select-container">
              <mv-select
                .value="${this.value.default}"
                .options="${this.options.default}"
                .theme="${theme}"
                @select-option="${this.displayValue('default')}"
                has-empty-option
                no-clear-button
              ></mv-select>
              <mv-button
                button-style="error"
                @button-clicked="${this.clearValue('default')}"
              >
                <mv-fa icon="times"></mv-fa>
              </mv-button>
            </div>
          </div>
          <div>
            <mv-toast
              type="information"
              .closeable="${false}"
              .theme="${theme}"
            >
              <h4>Default type selected value:</h4>
              <div class="message">
                ${this.value && this.value.default && this.value.default.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group">
            <label>Searchable</label>
            <mv-select
              .value="${this.value.searchable}"
              .options="${this.options.searchable}"
              .theme="${theme}"
              @select-option="${this.displayValue('searchable')}"
              @on-search="${this.searchValue('searchable')}"
              @on-clear="${this.clearValue('searchable')}"
              searchable
            ></mv-select>
          </div>
          <div>
            <mv-toast
              type="information"
              .closeable="${false}"
              .theme="${theme}"
            >
              <h4>Searchable type selected value:</h4>
              <div class="message">
                ${this.value &&
                this.value.searchable &&
                this.value.searchable.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group"  style="height:400px;display : block">
            <label>Always open</label>

            <mv-select
              .value="${this.value.alwaysOpen}"
              .options="${this.options.alwaysOpen}"
              .theme="${theme}"
              @select-option="${this.displayValue('alwaysOpen')}"
              @on-search="${this.searchValue('alwaysOpen')}"
              @on-clear="${this.clearValue('alwaysOpen')}"
              always-open
              searchable
            ></mv-select>
          </div>

          <div>
            <mv-toast
              type="information"
              .closeable="${false}"
              .theme="${theme}"
            >
              <h4>Always open type selected value:</h4>
              <div class="message">
                ${this.value &&
                this.value.alwaysOpen &&
                this.value.alwaysOpen.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group" style="height:400px;display : block">
            <label>Multiple</label>

            <mv-select
              class="mutiselect"
              .value="${this.value.multiSelect}"
              .options="${MULTI_LEVEL_OPTIONS}"
              .theme="${theme}"
              @select-option="${this.displayValue('multiSelect')}"
              @on-search="${this.searchValue('multiSelect')}"
              @on-clear="${this.clearValue('multiSelect')}"
              @change="${this.removeValues('multiSelect')}"
              multi-select
              searchable
              always-open
            ></mv-select>
          </div>

          <div>
            <mv-toast
              type="information"
              .closeable="${false}"
              .theme="${theme}"
            >
              <h4>Multiple value:</h4>
              <div class="message">
                ${this.value.multiSelect && this.value.multiSelect.map(i => i.label)}           
              </div>
            </mv-toast>
          </div>
        </div>
      </mv-container>
    `
  }

  connectedCallback() {
    // let test = this.shadowRoot.getElementById("multiselect")
    this.options = Object.keys(this.options).reduce(
      (options, key) => ({ ...options, [key]: MULTI_LEVEL_OPTIONS }),
      {},
    )

    super.connectedCallback()
  }

  displayValue = (name) => {
    return (event) => {
      const {
        detail: { option },
      } = event
      console.log(option)
      this.value = { ...this.value, [name]: option }
    }
  }

  displayValues = (name) => {
    return (event) => {
      const {
        detail: { option },
      } = event

      console.log(option)
      this.value = { ...this.value, [name]: option }
    }
  }

  removeValues = (name) => {
    return (event) => {
      const {
        detail: { option },
      } = event

      console.log(option);
      this.value = { ...this.value, [name]: option }
    }
  }

  searchValue = (name) => {
    return (event) => {
      const {
        detail: { value },
      } = event
      this.options = {
        ...this.options,
        [name]: MULTI_LEVEL_OPTIONS.filter((option) => {
          const searchableLabel =
            option.label.type === 'html'
              ? new DOMParser()
                  .parseFromString(option.label.strings[0], 'text/html')
                  .body.textContent.trim()
              : option.label
          if (!!value) {
            return (
              searchableLabel.includes(value) || option.value.includes(value)
            )
          }
        }),
      }
    }
  }

  // this is a sample function for changing the value of the component
  // from the parent component.
  clearValue = (name) => {
    const self = this
    return ({ detail }) => {
      const { originalEvent } = detail || {}
      if (originalEvent) {
        originalEvent.stopPropagation()
      }
      self.value = { ...self.value, [name]: null }
      // self.options = { ...self.options, [name]: this.resetOptions() }
    }
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent
    this.theme = value
  }
}

customElements.define('mv-select-demo', MvSelectDemo)
