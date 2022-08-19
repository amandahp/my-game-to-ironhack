export const template = document.createElement('template')
template.innerHTML += `
  <div class="total-points">
  <span>Your total points are ${localStorage.getItem('totalPoints')}</span>
  </div>
`