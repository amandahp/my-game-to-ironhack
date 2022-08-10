import {css} from './style.js'
import {cssButton} from '../styles/index.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  ${cssButton}
  <div class="difficulty-section">
    <button class="easy-btn" value="60000"><span class="button-span">Easy</span></button>
    <button class="medium-btn" value="30000"><span class="button-span">Medium</span></button>
    <button class="expert-btn" value="15000"><span class="button-span">Expert</span></button>
  </div>`
