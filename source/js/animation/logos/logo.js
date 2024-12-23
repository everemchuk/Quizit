import { gsap } from 'gsap';

export function logoAnimation() {

  const tl = gsap.timeline({ repeat: -1, delay: 5, repeatDelay: 1})
  tl.to('#logo-blue', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.in(1, 0.2)", translateX: -30 })
  tl.to('#logo-red', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.in(1, 0.2)", translateX: 30 }, "<")
  tl.to('#logo-yellow', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.in(1, 0.2)", translateY: -30 }, "<")
  tl.to('#logo-lightBlue', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.in(1, 0.2)", translate: "30px -30px" }, "<")
  tl.to('#logo-blue', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.out(1, 0.2)", translateX: 0 })
  tl.to('#logo-red', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.out(1, 0.2)", translateX: 0 }, "<")
  tl.to('#logo-yellow', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.out(1, 0.2)", translateY: 0 }, "<")
  tl.to('#logo-lightBlue', { duration: 2, transformOrigin: "50% 50%", ease: "elastic.out(1, 0.2)", translate: "0px 0px" }, "<")

}