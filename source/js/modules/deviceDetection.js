import MobileDetect from 'mobile-detect';

const device = new MobileDetect(window.navigator.userAgent)

export function deviceDetection() {

  if (device.mobile()) {
    document.body.classList.add('_mobile')
  } else {
    document.body.classList.add('_pc')
  }

}