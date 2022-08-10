import { template } from './template.js'

class LifeStatus extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }



}

customElements.define('life-status', LifeStatus);