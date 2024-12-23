import { gsap } from 'gsap';

function loaderAnimation() {

  const tl = gsap.timeline({ repeat: -1 })
  tl.to('#icon-blue', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.in", translateX: -30 }, "+=0.5")
  tl.to('#icon-red', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.in", translateX: 30 }, "<")
  tl.to('#icon-yellow', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.in", translateY: -30 }, "<")
  tl.to('#icon-lightBlue', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.in", translate: "30px -30px" }, "<")
  tl.to('#icon-blue', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.out", translateX: 0 })
  tl.to('#icon-red', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.out", translateX: 0 }, "<")
  tl.to('#icon-yellow', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.out", translateY: 0 }, "<")
  tl.to('#icon-lightBlue', { duration: .5, transformOrigin: "50% 50%", ease: "bounce.out", translate: "0px 0px" }, "<")

}

export default loaderAnimation;