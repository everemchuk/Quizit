
import { gsap } from 'gsap'
import { logoTextHAnimation } from '../animation/logos/logotexth.js'
import { logoTextVAnimation } from '../animation/logos/logotextv.js'

const mediaQuery = window.matchMedia("(min-width: 501px)")
const preloaderType = mediaQuery.matches

const $preloader = document.getElementById('preloader')
const $preloaderContainer = document.getElementById('preloaderContainer')
const $preloaderHorizontal = document.getElementById('preloaderH')
const $preloaderVertical = document.getElementById('preloaderV')

export const preloaderAnimationTiming = {
  showPreloader: 500,
  hidePreloader: 3000,
  endPreloader: 5000,
  showSlide: 2500,
  endSlide: 4000
}

function preloaderSlide() {

  const $logo = document.getElementById('logo')
  const $logoSlide = document.getElementById('preloaderSlide')
  const $logoSlideImage = document.getElementById('LogoSlide')

  let $preloaderLogo = null
  if (preloaderType) {
    $preloaderLogo = document.getElementById('lth-logo')
  } else {
    $preloaderLogo = document.getElementById('ltv-logo')
  }

  // Getting logo dimensions
  // Получение размера логотипов
  const dimensions = () => {

    const logoDimensions = {
      width: $logo.getBoundingClientRect().width,
      height: $logo.getBoundingClientRect().height,
      top: $logo.getBoundingClientRect().top,
      left: $logo.getBoundingClientRect().left
    }
    const preloaderLogoDimensions = {
      width: $preloaderLogo.getBoundingClientRect().width,
      height: $preloaderLogo.getBoundingClientRect().height,
      top: $preloaderLogo.getBoundingClientRect().top,
      left: $preloaderLogo.getBoundingClientRect().left
    }

    return { logoDimensions, preloaderLogoDimensions }

  }

  // Setting sliding logo instruction
  // Настройка инструкции по скольжению логотипа
  const logoSlideSetting = () => {

    // Setting initial logo state
    // Установка начального состояния логотипа
    $logo.style.opacity = 0
    $logoSlide.style.display = 'none'

    // Asynchronous resize observer listening for screen size changing and updates dimensions
    // Асинхронный изменение размера наблюдатель прослушивает изменение размера экрана и обновляет размеры
    const resizeObserver = () => {
      const { preloaderLogoDimensions } = dimensions()
      $logoSlide.style.top = ` ${preloaderLogoDimensions.top}px `
      $logoSlide.style.left = ` ${preloaderLogoDimensions.left}px `
      $logoSlideImage.style.width = ` ${preloaderLogoDimensions.width}px `
      $logoSlideImage.style.height = ` ${preloaderLogoDimensions.height}px `
    }

    // Setting synchronous dimensions for slide image
    // Установка синхронных размеров для лого слайда
    resizeObserver()
    
    // Adding resize observer listener
    // Добавление изменяющего размеры слушателя
    window.addEventListener('resize', resizeObserver)
    // Removing resize observer listener
    // Удаление изменяющего размеры слушателя
    setTimeout(() => window.removeEventListener('resize', resizeObserver), preloaderAnimationTiming.hidePreloader)

    // Adding resize observer listener for mobile device
    // Добавление изменяющего размеры слушателя для телефонов
    window.addEventListener('orientationchange', resizeObserver)
    // Removing resize observer listener for mobile device
    // Удаление изменяющего размеры слушателя для телефонов
    setTimeout(() => window.removeEventListener('orientationchange', resizeObserver), preloaderAnimationTiming.hidePreloader)

    // Updating logo state
    // Обновление состояния логотипа
    setTimeout(() => $logoSlide.style.display = 'block', preloaderAnimationTiming.showSlide)
    setTimeout(() => {
      $logoSlide.style.display = 'none'
      $logo.style.opacity = 1
    }, preloaderAnimationTiming.endPreloader)

  }

  const { logoDimensions } = dimensions()
  const logoSlideAnimation = () => {
    gsap.to($logoSlide, { delay: 3.1, duration: 1, ease: "power4.out", top: logoDimensions.top, left: logoDimensions.left })
    gsap.to($logoSlideImage, { delay: 3.1, duration: 1, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })
    setTimeout(() => {
      const { logoDimensions } = dimensions()
      gsap.to($logoSlideImage, { duration: 1, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })
    }, preloaderAnimationTiming.endSlide)
  }

  logoSlideSetting()
  logoSlideAnimation()

}

export function preloader() {

  const preloaderSetting = () => {

    const $border = document.getElementById('border')
    const border = window.getComputedStyle($border, null).getPropertyValue('border-width').slice(0, -2)
    const borderWidth = Number(border)

    const borderAnimation = () => {
      gsap.to('.preloader__border', { duration: 1, delay: .07, ease: "elastic.out(1, 0.4)", borderWidth: borderWidth })
      gsap.to('.preloader__border-cover', { duration: 1, ease: "elastic.out(1, 0.4)", borderWidth: borderWidth })
    }

    $preloader.dataset.status = 'visible'
    $preloaderContainer.dataset.status = 'visible'

    $preloaderHorizontal.dataset.status = 'none'
    $preloaderVertical.dataset.status = 'none'

    if (preloaderType) {
      $preloaderHorizontal.dataset.status = 'block'
    } else {
      $preloaderVertical.dataset.status = 'block'
    }

    setTimeout(() => {
      preloaderType ? logoTextHAnimation() : logoTextVAnimation()
      borderAnimation()
    }, preloaderAnimationTiming.showPreloader)

  }

  preloaderSetting()
  preloaderSlide()

}

export function hidePreloader() {
  $preloaderContainer.dataset.status = 'hidden'
  $preloader.dataset.status = 'hold'
  setTimeout(() => $preloader.dataset.status = 'none', preloaderAnimationTiming.showSlide)
}