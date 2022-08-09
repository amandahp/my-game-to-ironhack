import {css} from './style.js'
import {subjects} from '../../data/index.js'


export const template = document.createElement('template')
template.innerHTML += `
  ${css}
  <div class="container">
    <div class="roullete">
      <div class="fill fill_1"></div>
      <div class="fill fill_2"></div>
      <div class="fill fill_3"></div>
      <div class="fill fill_4"></div>
      <div class="fill fill_5"></div>
      <div class="fill fill_6"></div>
      <div class="fill fill_7"></div>

      <div class="line line_1"></div>
      <div class="line line_2"></div>
      <div class="line line_3"></div>
      <div class="line line_4"></div>
      ${subjects.map((subject, index) => {
        return (
          `<div class="content content_${index+1}"><span>${subject}</span></div>`
        )
      }).join('')}
    </div>
    <div class="draw-subject"><span></span></div>
    <button class="trigger"><span class="span-button">Draw</span></button>
  </div>
`
