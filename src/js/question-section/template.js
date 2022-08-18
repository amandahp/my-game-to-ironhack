import { css } from './style.js'
import { cssButton } from '../styles/index.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  ${cssButton}
  <div class="life-section">
    <span class="life one">♥</span>
    <span class="life two">♥</span>
    <span class="life three">♥</span>
  </div>
  <section class="questions-and-answers">
    <div>
      <span class="question">Question</span>
    </div>
    <button class="alternative-one"><span class="button-span">ONE</span></button>
    <button class="alternative-two"><span class="button-span">TWO</span></button>
    <button class="alternative-three"><span class="button-span">THREE</span></button>
  </section>

`