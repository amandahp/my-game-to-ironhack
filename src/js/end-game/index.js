import { template } from './template.js'

class EndGame extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }



}

customElements.define('end-game', EndGame);