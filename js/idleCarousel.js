const sliderContainer = document.querySelector('.idle-section')
const images = document.querySelectorAll('.image-wrapper img')
const slider = document.querySelector('.image-wrapper')

//화면 사이즈 조절시 페이지 리로드
window.addEventListener('resize', reloadPage)
function reloadPage() {
  window.location.reload()
}

let current = 1
const imgSize = images[0].clientWidth

slider.style.transform = `translateX(${-imgSize}px)`

slider.addEventListener('transitionend', () => {
  if (images[current].classList.contains('first-img')) {
    slider.style.transition = 'none'
    current = images.length - 2
    slider.style.transform = `translateX(${-imgSize * current}px)`
  }
  if (images[current].classList.contains('last-img')) {
    slider.style.transition = 'none'
    current = images.length - current
    slider.style.transform = `translateX(${-imgSize * current}px)`
  }
})

const next = () => {
  if (current >= images.length - 1) return
  slider.style.transition = '1000ms ease-in-out transform'
  current++
  slider.style.transform = `translateX(${-imgSize * current}px)`
}

let auto = setInterval(next, 2000)

slider.addEventListener('mouseleave', () => {
  auto = setInterval(next, 2000)
})

slider.addEventListener('mouseenter', () => {
  clearInterval(auto)
})
