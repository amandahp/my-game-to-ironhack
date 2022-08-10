import { css } from './style.js'
import { cssButton } from '../styles/index.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  ${cssButton}
  <section class="questions-and-answers">
    <div>
      <span value="question">Question</span>
    </div>
    <button value="alternative-one"><span class="button-span">ONE</span></button>
    <button value="alternative-two"><span class="button-span">TWO</span></button>
    <button value="alternative-three"><span class="button-span">THREE</span></button>
  </section>

`