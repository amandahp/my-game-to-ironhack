import {css} from './style.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  <div class="difficulty-section">
    <button class="easy-btn" value="60000"><span>Easy</span></button>
    <button class="medium-btn" value="30000"><span>Medium</span></button>
    <button class="expert-btn" value="15000"><span>Expert</span></button>
  </div>`
