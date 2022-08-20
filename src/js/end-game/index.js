import { template } from './template.js'

class EndGame extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const totalPoints = localStorage.getItem('totalPoints')
    this.shadowRoot.querySelector('.total-points span').innerHTML =`Your total points are ${totalPoints}`
  }



}

customElements.define('end-game', EndGame);