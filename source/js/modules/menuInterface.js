import { burgerAnimation } from './../animation/icons/burger.js';
import { themeAnimation } from './../animation/icons/theme.js';
import { soundAnimation } from './../animation/icons/sound.js';

const $menu = document.getElementById('menu')
const $menuButton = document.getElementById('menuButton')
const $theme = document.getElementById('Theme')
const $sound = document.getElementById('Sound')

function lock() {
  $menuButton.dataset.mask = true
}
function unlock() {
  $menuButton.dataset.mask = false
}

$menuButton.dataset.mask = false
$menu.dataset.menuCondition = 'hide'
let condition = $menu.dataset.menuCondition

function menuAnimation() {

  lock()

  burgerAnimation()

  switch (condition) {
    case 'hide':
      condition = 'show'
      $menu.dataset.menuCondition = 'show'
      break
    case 'show':
      condition = 'hide'
      $menu.dataset.menuCondition = 'hide'
      break
    default: console.warn('Please set condition for a menu interface')
  }

  setTimeout(unlock, 1500)

}

export function menuInterface() {

  $menuButton.addEventListener('click', menuAnimation)
  $theme.addEventListener('click', themeAnimation)
  $sound.addEventListener('click', soundAnimation)

}