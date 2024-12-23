import { gsap } from 'gsap'

const $sound = document.getElementById('sound')
const audio = document.getElementById('audio')

audio.volume = 0.05
audio.play()

const lock = () => {
  $sound.dataset.mask = true
}
const unlock = () => {
  $sound.dataset.mask = false
}

function animationOn() {
  gsap.to('#speaker', { duration: .1, delay: 0, ease: "power1.inOut", translateX: 40 })
  gsap.to('#cross', { duration: .1, delay: 0, ease: "power1.inOut", translateX: -40 })
  gsap.to('#cross', { duration: .1, delay: .2, ease: "power1.inOut", opacity: 0 })
  gsap.to('#speaker', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%" })
  gsap.to('#volume', { duration: .1, delay: .3, ease: "power1.inOut", translateX: 0, opacity: 1 })
}
function animationOff() {
  gsap.to('#speaker', { duration: .1, delay: 0, ease: "power1.inOut", translateX: 40 })
  gsap.to('#volume', { duration: .1, delay: 0, ease: "power1.inOut", translateX: -40 })
  gsap.to('#volume', { duration: .1, delay: .2, ease: "power1.inOut", opacity: 0 })
  gsap.to('#speaker', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%" })
  gsap.to('#cross', { duration: .1, delay: .3, ease: "power1.inOut", translateX: 0, opacity: 1 })
}

$sound.dataset.mask = false
$sound.dataset.condition = 'on'
let condition = $sound.dataset.condition

if ($sound.dataset.condition === 'off') {
  animationOff()
  audio.pause()
} else {
  animationOn()
  audio.play()
}

export function soundAnimation() {

  lock()

  switch (condition) {
    case 'off':
      $sound.dataset.condition = 'on'
      condition = $sound.dataset.condition
      animationOn()
      audio.play()
      break
    case 'on':
      $sound.dataset.condition = 'off'
      condition = $sound.dataset.condition
      animationOff()
      audio.pause()
      break
    default: console.warn('Please set condition for a sound icon')
  }

  setTimeout(unlock, 500)

}

