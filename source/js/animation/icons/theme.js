
const theme = document.querySelector('.theme')
const border = theme.querySelector('#borderTheme')
const circle = theme.querySelector('#circleTheme')

const lock = () => {
  theme.dataset.mask = true
}
const unlock = () => {
  theme.dataset.mask = false
}

const animationDark = () => {
  border.classList.toggle('animate-border')
  circle.classList.toggle('animate-circle')
}
const animationLight = () => {
  border.classList.toggle('animate-border')
  circle.classList.toggle('animate-circle')
}

theme.dataset.mask = false
theme.dataset.theme = 'dark'
let condition = theme.dataset.theme

if (theme.dataset.theme === 'dark') {
  animationDark()
}

export function themeAnimation() {

  lock()

  switch (condition) {
    case 'dark':
      theme.dataset.theme = 'light'
      condition = 'light'
      animationLight()
      document.documentElement.style.setProperty('--theme', '#EDECE7')
      break
    case 'light':
      theme.dataset.theme = 'dark'
      condition = 'dark'
      animationDark()
      document.documentElement.style.setProperty('--theme', '#2C3033');
      break
    default: console.warn('Please set condition for a theme icon')
  }

  setTimeout(unlock, 500)

}