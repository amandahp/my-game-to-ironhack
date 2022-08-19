import {css} from './style.js'
import {cssButton} from '../styles/index.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  ${cssButton}
  <div class="difficulty-section">
    <h1>QUESTION & ANSWERS</h1>
    <p>Select the difficulty for the game</p>
    <button class="easy-btn" value="60000"><span class="button-span">Easy</span></button>
    <button class="medium-btn" value="30000"><span class="button-span">Medium</span></button>
    <button class="expert-btn" value="5000"><span class="button-span">Expert</span></button>
  </div>`
