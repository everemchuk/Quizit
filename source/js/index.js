import engineScroll from './modules/engineScroll.js'
import scrollObserver from './modules/scrollObserver.js'
import { deviceDetection } from './modules/deviceDetection.js'
import { menuInterface } from './modules/menuInterface.js'
import { logoAnimation } from './animation/logos/logo.js'
import { preloader, hidePreloader, preloaderAnimationTiming } from './modules/preloader.js'

function index() {

  deviceDetection()
  menuInterface()
  logoAnimation()


  preloader()
  setTimeout(() => { 
    engineScroll()
    scrollObserver()
    hidePreloader()
  }, preloaderAnimationTiming.hidePreloader)

}

document.addEventListener('DOMContentLoaded', index)