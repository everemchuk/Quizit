import { gsap } from 'gsap';

export function logoTextVAnimation() {

  const tl = gsap.timeline()
  tl.fromTo('#ltv-blue', { scale: 0, translateX: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0 })
  tl.fromTo('#ltv-red', { scale: 0, translateX: 100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0 }, "<")
  tl.fromTo('#ltv-yellow', { scale: 0, translateY: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateY: 0 }, "<")
  tl.fromTo('#ltv-lightBlue', { scale: 0, translateX: 100, translateY: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0, translateY: 0 }, "<")
  tl.fromTo('#ltv-text', { scale: 0, translateY: -220, translateX: 165 }, {duration: 1, transformOrigin: "50% 50%", ease: "elastic.out(1, 0.45)", opacity: 1, scale: 1, translateY: 50 }, "-=50%")

}