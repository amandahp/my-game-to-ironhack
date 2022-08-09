import {css} from './style.js'

export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  <div class="difficulty-section">
    <button class="easy-btn" value="60000">EASY</button>
    <button class="medium-btn value="30000">MEDIUM</button>
    <button class="expert-btn" value="15000">EXPERT</button>
  </div>`
