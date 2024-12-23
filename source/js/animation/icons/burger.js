import { gsap } from 'gsap'

const $burger = document.getElementById('burger')

const reset = () => {
  const top = $burger.querySelector('#top')
  const middle = $burger.querySelector('#middle')
  const bottom = $burger.querySelector('#bottom')
  top.style = ''
  middle.style = ''
  bottom.style = ''
}

function animationOpen() {
  const tlOpen = gsap.timeline({ onComplete: reset })
  tlOpen.to("#top", { duration: .2, ease: "power1.inOut", y: 55 })
  tlOpen.to("#bottom", { duration: .2, y: -55, }, "<")
  tlOpen.to("#bottom", { duration: .1, ease: "power1.inOut", transformOrigin: "50% 50%", scale: 0, autoAlpha: 0 })
  tlOpen.to("#top", { duration: .2, ease: "power1.inOut", y: -100 })
  tlOpen.to('#middle1', { duration: 1, ease: "bounce.out", y: -30, rotate: 50, transformOrigin: "50% 50%" }, "-=20%")
  tlOpen.to('#middle2', { duration: 1, ease: "bounce.out", y: -30, rotate: -50, transformOrigin: "50% 50%" }, "<")
  return tlOpen
}
function animationClose() {
  const tlClose = gsap.timeline({ onComplete: reset })
  tlClose.to('#middle1', { duration: 1, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" })
  tlClose.to('#middle2', { duration: 1, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" }, "<")
  tlClose.to("#top", { duration: .2, ease: "power1.inOut", y: 55 }, "<")
  tlClose.to("#bottom", { duration: .1, ease: "power1.inOut", transformOrigin: "50% 50%", scale: 1, autoAlpha: 1 })
  tlClose.to("#top", { duration: .2, ease: "power1.inOut", y: 0 })
  tlClose.to("#bottom", { duration: .2, y: 0, }, "-=70%")
  return tlClose
}

$burger.dataset.condition = 'open'
let condition = $burger.dataset.condition

export function burgerAnimation() {

  switch (condition) {
    case 'open':
      $burger.dataset.condition = 'close'
      condition = $burger.dataset.condition
      animationOpen()
      break
    case 'close':
      $burger.dataset.condition = 'open'
      condition = $burger.dataset.condition
      animationClose()
      break
    default: console.warn('Please set condition for a burger icon')
  }

}