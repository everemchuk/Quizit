
function engineScroll() {

  let zSpacing = -1000
  let zValues = []
  let lastPosition = zSpacing / 5
  const $frames = document.querySelectorAll('.frame')

  function engineScroll(event) {

    let top = document.documentElement.scrollTop
    let delta = lastPosition - top
    lastPosition = top

    $frames.forEach((frame, index) => {
      zValues.push((index * zSpacing) + zSpacing)

      zValues[index] += delta * -5.5
      let transfrom = `translateZ(${zValues[index]}px)`
      let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
      frame.setAttribute('style', `transform: ${transfrom}; opacity: ${opacity}`)
    })

  }

  window.addEventListener('scroll', engineScroll)

  const startPosition = window.scrollY === 10 ? 11 : 10
  window.scrollTo(0, startPosition)

}

export default engineScroll;


