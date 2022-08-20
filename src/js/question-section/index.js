import { template } from './template.js'
import { subjects, questions } from '../../data/index.js'
import '../end-game/index.js'

class QuestionSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.timer;
  }

  shuffleAnswers(questions) {
      for (let i = questions.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = questions[i];
          questions[i] = questions[j];
          questions[j] = temp;
      }
      return questions;
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const difficultyTime = localStorage.getItem('difficultyTime')
    localStorage.setItem('numberOfQuestions',5)
    localStorage.setItem('totalPoints',Number(difficultyTime)*5)
    localStorage.setItem('endGame',0)
    localStorage.setItem('correctQuestion',0)
    this.showQuestion()
  }

  showQuestion(){
    const subject = localStorage.getItem('draw-subject').toLowerCase()
    this.createQuestion(subject, localStorage.getItem('numberOfQuestions'))

  }
  
  createQuestion(subject, numberOfQuestions){
    const time = localStorage.getItem('difficultyTime')
    localStorage.setItem('questionStarted',new Date().getTime() /1000)
    window.clearTimeout(this.timer)
    const endGame = localStorage.getItem('endGame')
    if(Number(numberOfQuestions) <= 0) {
      if(!Number(endGame)){
        this.handleEndGame()
      }
    }
    else {
      this.timer = setTimeout(() => {
        this.createQuestion(subject, Number(numberOfQuestions)-1)
      },time)
    }
    const dataQuestion = this.getQuestion(subject)
    this.shadowRoot.querySelector('.question').innerHTML = dataQuestion.question
    const shuffledAnswers = this.shuffleAnswers(dataQuestion.answers)
    this.shadowRoot.querySelector('.alternative-one span').innerHTML = shuffledAnswers[0].text
    this.shadowRoot.querySelector('.alternative-two span').innerHTML = shuffledAnswers[1].text
    this.shadowRoot.querySelector('.alternative-three span').innerHTML = shuffledAnswers[2].text
    this.selectAnswer(shuffledAnswers)
  }

  getQuestion(subject) {
    const questionsSubject = questions.filter(question => question.category === subject)
    const drawQuestion = Math.floor(Math.random() * questionsSubject.length)
    return questionsSubject[drawQuestion]
  }

  callCreateQuestion() {
    const isTheGameEnded = localStorage.getItem('endGame')
    if(!Number(isTheGameEnded)) {
      localStorage.setItem('numberOfQuestions',Number(localStorage.getItem('numberOfQuestions'))-1)
      setTimeout(() => {
        this.createQuestion(localStorage.getItem('draw-subject').toLowerCase(), localStorage.getItem('numberOfQuestions'))
      },1500)
    }

  }

  handleAnswer(questionAnswer) {
    localStorage.setItem('questionAnswered',new Date().getTime() /1000)
    if(!questionAnswer){
      try{
        const previousTotal = Number(localStorage.getItem('totalPoints'))
        const difficultyTime = Number(localStorage.getItem('difficultyTime'))
        localStorage.setItem('totalPoints',previousTotal - difficultyTime)
        this.shadowRoot.querySelector('.life-section').removeChild(this.shadowRoot.querySelector('.life-section').getElementsByTagName('span')[0])
        this.callCreateQuestion()
      }catch(e) {
        const gotAtLeastOneCorrect = localStorage.getItem('correctQuestion')
        if(!Number(gotAtLeastOneCorrect)) {
          localStorage.setItem('totalPoints',0)
        }
        this.handleEndGame()
      }
    }
    else {
      const questionStarted = localStorage.getItem('questionStarted')
      const questionAnswered = localStorage.getItem('questionAnswered')
      const total = Math.round(Number(questionAnswered) - Number(questionStarted))*100
      const previousTotal = Number(localStorage.getItem('totalPoints'))
      localStorage.setItem('totalPoints',previousTotal - total)
      localStorage.setItem('correctQuestion',1)
      this.callCreateQuestion()
    }
  }

  selectAnswer(dataQuestion){

    this.shadowRoot.querySelector('.alternative-one span').style.background = 'var(--gaisboro)'
    this.shadowRoot.querySelector('.alternative-two span').style.background = 'var(--gaisboro)'
    this.shadowRoot.querySelector('.alternative-three span').style.background = 'var(--gaisboro)'

    this.shadowRoot.querySelector('.alternative-one').onclick = () => {
      if(dataQuestion[0].correct) {
        this.shadowRoot.querySelector('.alternative-one span').style.background = 'var(--three-color)'
        this.handleAnswer(true)
      }else {
        this.shadowRoot.querySelector('.alternative-one span').style.background = 'var(--red)'
        this.handleAnswer(false)
      }
    }
    this.shadowRoot.querySelector('.alternative-two').onclick = () => {
      if(dataQuestion[1].correct) {
        this.shadowRoot.querySelector('.alternative-two span').style.background = 'var(--three-color)'
        this.handleAnswer(true)
      }else {
        this.shadowRoot.querySelector('.alternative-two span').style.background = 'var(--red)'
        this.handleAnswer(false)
      }
    }
    this.shadowRoot.querySelector('.alternative-three').onclick = () => {
      if(dataQuestion[2].correct) {
        this.shadowRoot.querySelector('.alternative-three span').style.background = 'var(--three-color)'
        this.handleAnswer(true)
      }else {
        this.shadowRoot.querySelector('.alternative-three span').style.background = 'var(--red)'
        this.handleAnswer(false)
      }
    }
  }

  handleEndGame() {
    localStorage.setItem('numberOfQuestions',0)
    localStorage.setItem('endGame',1)
    this.shadowRoot.querySelector('.questions-and-answers').style.display = "none"
    this.shadowRoot.querySelector('.life-section').style.display = "none"
    this.shadowRoot.append(document.createElement('end-game'))
  }

  timeQuestion(time){
    setTimeout(() =>{}, time*5)
  }

}

customElements.define('question-section', QuestionSection)