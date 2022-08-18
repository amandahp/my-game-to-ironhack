import { template } from './template.js'
import { subjects, questions } from '../../data/index.js'

class QuestionSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.showQuestion()
  }

  showQuestion(){
    const subject = localStorage.getItem('draw-subject').toLowerCase()
    const time = localStorage.getItem('difficultyTime')
    setInterval(this.createQuestion(subject), time)
    
  }

  createQuestion(subject){
    const dataQuestion = this.getQuestion(subject)
    this.shadowRoot.querySelector('.question').innerHTML = dataQuestion.question
    this.shadowRoot.querySelector('.alternative-one span').innerHTML = dataQuestion.wrongAnswerOne
    this.shadowRoot.querySelector('.alternative-two span').innerHTML = dataQuestion.correctAnswer
    this.shadowRoot.querySelector('.alternative-three span').innerHTML = dataQuestion.wrongAnswerTwo
    this.selectAnswer() 
  }

  getQuestion(subject) {
    const questionsSubject = questions.filter(question => question.category === subject)
    let drawQuestion = Math.floor(Math.random() * questionsSubject.length)

    return questionsSubject[drawQuestion]
  }

  selectAnswer(){
    this.shadowRoot.querySelector('.alternative-two').onclick = () => {
      this.shadowRoot.querySelector('.alternative-two span').style.background = 'var(--three-color)'
    }
    this.shadowRoot.querySelector('.alternative-one').onclick = () => {
      this.shadowRoot.querySelector('.alternative-one span').style.background = 'var(--red)'
      this.shadowRoot.querySelector('.life-section').removeChild()
    }
    this.shadowRoot.querySelector('.alternative-three').onclick = () => {
      this.shadowRoot.querySelector('.alternative-three span').style.background = 'var(--red)'
    }
  }

  timeQuestion(time){
    setTimeout(() =>{}, time*5)
  }

}

customElements.define('question-section', QuestionSection)