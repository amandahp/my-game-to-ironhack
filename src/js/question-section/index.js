import { template } from './template.js'

class QuestionSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('question-section', QuestionSection)