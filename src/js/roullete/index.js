import { template } from './template.js'
import { subjects, questions } from '../../data/index.js'
import '../question-section/index.js'


class Roullete extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('.trigger').onclick = () => this.onClickTrigger()
  }

  async onClickTrigger(e) {
    this.shadowRoot.querySelector('.roullete').classList.add("loop");

    let drawSubject = Math.floor(Math.random() * subjects.length);

    setTimeout(async () => {
      await this.shadowRoot.querySelector('.roullete').classList.remove("loop");
      this.draw(subjects[drawSubject])
    }, 5000)
    
  }

  draw(drawSubject) {
    this.shadowRoot.querySelector('.roullete').style.display = "none"
    this.shadowRoot.querySelector('.trigger').style.display = "none"
    this.shadowRoot.querySelector('.draw-subject').style.display = "flex"
    this.shadowRoot.querySelector('.draw-subject span').innerHTML = drawSubject
    localStorage.setItem('draw-subject', drawSubject)
    setTimeout(() => {
      this.createQuestion()
    }, 3000)
  }
  
  createQuestion(){
    this.shadowRoot.querySelector('.draw-subject').style.display = "none"
    this.shadowRoot.append(document.createElement('question-section'))
  }


}

customElements.define('component-roullete', Roullete)