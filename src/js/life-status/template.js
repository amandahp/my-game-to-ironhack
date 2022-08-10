import { css } from './style.js'

export const template = document.createElement('template')
template.innerHTML = `
  ${css}
  <div class="life-section">
    <span class="one-life">♥</span>
    <span class="two-life">♥</span>
    <span class="three-life">♥</span>
  </div>`
