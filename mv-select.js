import { LitElement, html, css } from 'lit'
import { debounce } from './lib/debounce.js'
import '@meveo-org/mv-click-away'

export class MvSelect extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: true, reflect: true },
      options: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true, reflect: true },
      placeholder: { type: String, attribute: true },
      searchable: { type: Boolean, attribute: true },
      hasEmptyOption: { type: Boolean, attribute: 'has-empty-option' },
      noClearButton: { type: Boolean, attribute: 'no-clear-button' },
      emptyLabel: { type: String, attribute: 'empty-label' },
      alwaysOpen: { type: Boolean, attribute: 'always-open' },
      // TODO - multi-select not yet implemented
      multiselect: { type: Boolean, attribute: 'multi-select' },
      showInput: { type: Boolean, attribute: false, reflect: true },
      theme: { type: String },
      isFilter: { type: Boolean, attribute: 'is-filter' },
    }
  }

  static get styles() {
    return css`
      :host {
        user-select: none;
        --mv-select-font-family: var(--font-family, Arial);
        --color: var(--mv-select-color, #777);
        --width: var(--mv-select-width, 200px);
        --input-padding: var(--mv-select-input-padding, 4px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: var(
          --mv-select-max-height,
          calc(var(--mv-select-font-size) + var(--outside-padding))
        );
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
        --mv-select-selected-font-size: var(
          --mv-select-selected-option-font-size,
          12px
        );
        --mv-select-input-group-bg-color: var(
          --mv-select-background-color,
          transparent
        );
      }

      .mv-select {
        position: relative;
        min-height: var(--full-height);
      }

      .mv-select-contents {
        height: var(--full-height);
      }

      .mv-select-contents.always-open {
        position: relative;
        height: unset;
      }

      .mv-select-input-group {
        background-color: var(--mv-select-input-group-bg-color);
        position: relative;
        display: grid;
        align-items: center;
        justify-items: start;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        max-height: var(--max-height);
        padding: var(--input-padding);
        width: var(--width);
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
        width: calc(100% - var(--dropdown-icon-total-width));
        overflow-x: hidden;
        white-space: nowrap;
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
        width: auto;
        list-style: none;
        z-index: 0;
        position: absolute;
        top: calc(var(--full-height) + 2px);
      }

      .always-open .mv-select-options {
        top: 2px;
        position: relative;
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
      .mv-select-values {
        position: relative;
        //display: grid;
        place-items: center start;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        height: auto;
        padding: var(--input-padding);
        display: table;
        width: 96%;
      }

      .mv-select-item.selected,
      .mv-select-item.highlight,
      .mv-select-item:hover {
        background: var(--option-hover-background);
        color: var(--option-hover-color);
        cursor: pointer;
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

      .mv-select-input {
        --mv-select-font-size: var(--mv-select-selected-font-size);
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

      .active {
        background-color: rgba(86, 190, 172, 0.1);
        border: 2px solid #56beac;
      }

      .mv-select-values li {
        background: #3999c1;
        border-radius: 5px;
        margin: 2px;
        display: block;
        float: left;
        padding: 3px 10px;
        color: #fff;
        cursor: pointer;
        font-size: 11px;
        border: solid 1px #ccc;
        list-style: none;
      }
      .reset{display:none !important;}
      .clear {    position: relative;
    float: right;
    bottom: 53px;
    height: 30px;
  cursor:pointer;background:none;border:none;}
  .selected {background-color:#3999C1;}
    `
  }

  constructor() {
    super()
    this.emptyOption = {
      label: '- Select one -',
      value: null,
    }
    this.placeholder = ''
    this.value = null
    this.options = []
    this.searchable = false
    this.open = false
    this.showInput = false
    this.alwaysOpen = false
    this.hasEmptyOption = false
    this.noClearButton = false

    this.theme = 'light'
    this.allValMultiSelect = []
  }

  render() {
    const alwaysOpen = this.alwaysOpen
    const options = this.hasEmptyOption
      ? [this.emptyOption, ...this.options]
      : this.options
    const clearClass = this.noClearButton ? ' no-clear' : ''
    const dropdownClass = alwaysOpen ? ' no-dropdown' : ''
    const searchableClass = this.searchable ? 'searchable' : 'static'
    const inputClass = `mv-select-input ${searchableClass}${dropdownClass}${clearClass}`
    const clearButtonClass = `mv-select-clear-button${dropdownClass}`
    const dropdownButtonClass = `mv-select-dropdown-button ${
      this.open ? 'open' : 'close'
    }`
    const optionsClass = `mv-select-options scrollbar ${this.theme}${
      this.open && !alwaysOpen ? ' open' : ''
    }`
    const label = this.value ? this.value.label : ''
    const value = this.showInput ? '' : label

    return html`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <div class="mv-select ">
          <div class="mv-select-contents${alwaysOpen ? ' always-open' : ''}">
            <div
              class="mv-select-input-group${this.isFilter && this.value.value
                ? ' active'
                : ''}"
              @click="${this.toggleDropdown}"
              @keyup="${this.handleKeyPress}"
            >
              ${this.showInput
                ? html`
                    <input
                      class="${inputClass}"
                      .value="${value}"
                      placeholder="${this.placeholder}"
                    />
                  `
                : html`
                    <slot name="custom-value">
                      <div class=${inputClass}>${label}</div>
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
                  ${this.multiselect == true
                    ? html`
                        <ul class="mv-select-values"><li class="reset"></li>
                          ${this.allValMultiSelect.map(
                            (i, index) =>
                              html`
                                <li
                                
                                  data-options="${i}"
                                  data-index=${index}
                                  class="data${index} datas"
                                  }
                                 }
                                >
                                  <slot name="custom-option">${i}</slot>
                                </li>
                              `,
                          )}
                        </ul>
                        <button @click="${this.clearSearch}" class="clear">×</button>
                      `
                    : html``}
                  ${options.length > 0
                    ? html`
                        <ul class="${optionsClass}">
                          ${options.map((item,index) => {
                            const selectedClass =
                              item === this.value ? ' selected' : ''
                            const itemClass = `mv-select-item${selectedClass}`
                            return html`
                              <li  data-index="${index}"
                                class="${itemClass} ${item.value}"
                                @click="${this.selectItem(item)}"
                              >
                                <slot name="custom-option">${item.label}</slot>
                              </li>
                            `
                          })}
                        </ul>
                      `
                    : html`
                        <ul class="${optionsClass}">
                          <li class="mv-select-item">
                            <slot name="custom-empty-message">
                              No available options
                            </slot>
                          </li>
                        </ul>
                      `}
                `
              : html``}
          </div>
        </div>
      </mv-click-away>
    `
  }
  firstUpdated() {
    if (this.multiselect) {
      this.shadowRoot.querySelector('.mv-select-input-group').style.display =
        'none'
    }
  }
  connectedCallback() {
    if (this.hasEmptyOption) {
      this.emptyOption.label = this.emptyLabel || '- Select one -'
      if (!this.value) {
        this.value = this.emptyOption
      }
    }
    this.addEventListener('select-option', this.setValue)
    super.connectedCallback()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      if (!this.value && this.hasEmptyOption) {
        this.value = this.emptyOption
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue)
  }

  handleClickAway = () => {
    this.open = false
    this.showInput = false
  }

  handleKeyPress = debounce((originalEvent) => {
    const self = this
    const { path, originalTarget } = originalEvent
    const eventPath = path || originalEvent.composedPath()
    const [input] = eventPath
    const { value } = input || originalTarget
    self.dispatchEvent(
      new CustomEvent('on-search', { detail: { value, originalEvent } }),
    )
  }, 300)

  toggleDropdown = (originalEvent) => {
    this.open = !this.open
    if (this.searchable) {
      this.showInput = this.alwaysOpen ? true : this.open
      const self = this
      setTimeout(() => {
        const inputElement = self.shadowRoot.querySelector('.mv-select-input')
        inputElement.focus()
        self.dispatchEvent(
          new CustomEvent('on-search', {
            detail: { value: null, originalEvent },
          }),
        )
      }, 0)
    }
  }

  setValue = (event) => {
    const {
      detail: { option },
    } = event
    this.value = option

    if (this.multiselect == true) {
      this.lastVal = option

      this.allValMultiSelect.push(this.lastVal.value)

      this.value = this.allValMultiSelect

      console.log(this.allValMultiSelect)
    } else {
      this.value = option
    }

    this.open = false
    if (this.searchable) {
      this.showInput = false
    }
  }
/*
  removeSelectedData(i) {



    let selector = '.data' + i

    let options = this.shadowRoot.querySelector(selector).dataset.options

 
    this.shadowRoot.querySelector(selector).remove()
    this.allValMultiSelect.splice(i, 1)


    let deleteData = this.shadowRoot.querySelector('.datas')

    if (deleteData == null) {
      this.clearSearch()
    }

    selector = '.' + options

    this.shadowRoot.querySelector(selector).style.display = 'block'
    this.shadowRoot.querySelector(selector).click()


    this.itemRemoved = true

    this.value = this.allValMultiSelect

    console.log(this.allValMultiSelect)


  }
*/


  selectItem = (option) => {
    const self = this
    return (e) => {
      if (e.ctrlKey) {
        self.dispatchEvent(
          new CustomEvent('select-option', { detail: { option } }),
        )
      } else if (this.multiselect == true) {
        if (this.itemRemoved != true) {
          let selector = '.' + option.value

          console.log(option.value)

          let indexList  = this.shadowRoot.querySelector(selector).dataset.index

          this.options.splice(indexList, 1)
          //this.options.splice(option.value, 1)

        //  this.shadowRoot.querySelector(selector).style.display="none"

          this.itemRemoved = false

          self.dispatchEvent(
            new CustomEvent('select-option', { detail: { option } }),
          )
        } else {
          self.dispatchEvent(
            new CustomEvent('select-option', { detail: { option } }),
          )
        }
      } else {
        self.dispatchEvent(
          new CustomEvent('select-option', { detail: { option } }),
        )
      }
    }
  }

  clearSearch = (originalEvent) => {
    this.allValMultiSelect = []


    this.shadowRoot.querySelector('.mv-select-item').style.display="block"

    const inputElement = this.shadowRoot.querySelector('.mv-select-input')
    inputElement.value = ''

    this.dispatchEvent(
      new CustomEvent('on-clear', { detail: { originalEvent } }),
    )
    inputElement.focus()
    
  }
}

customElements.define('mv-select', MvSelect)
