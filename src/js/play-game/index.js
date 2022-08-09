import { template } from './template.js'
import '../roullete/index.js'

class PlayGame extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('.easy-btn').onclick = () => this.goRoulete('.easy-btn')
    this.shadowRoot.querySelector('.medium-btn').onclick = () => this.goRoulete('.medium-btn')
    this.shadowRoot.querySelector('.expert-btn').onclick = () => this.goRoulete('.expert-btn')
  }

  goRoulete(className) {
    const difficultyTime = this.shadowRoot.querySelector(className).value
    localStorage.setItem('difficultyTime', difficultyTime)
    this.shadowRoot.removeChild(this.shadowRoot.querySelector('.difficulty-section'))
    this.shadowRoot.append(document.createElement('component-roullete'))
  }

}

customElements.define('play-game', PlayGame);