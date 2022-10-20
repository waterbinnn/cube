const sliderContainer = document.querySelector('.wrapper-banner')
const images = document.querySelectorAll('.image-wrapper img')
const slider = document.querySelector('.image-wrapper')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const dots = document.querySelectorAll('.pagenation li')

let current = 1
const imgSize = images[0].clientWidth

slider.style.transform = `translateX(${-imgSize}px)`

prevBtn.addEventListener('click', () => {
  clearInterval(auto)

  if (current <= 0) return
  slider.style.transition = '400ms ease-in-out transform'
  current--
  slider.style.transform = `translateX(${-imgSize * current}px)`

  for (let i = 0; i < dots.length; i++) {
    if (dots[i].dataset.index == current) {
      dots[i].classList.add('active')
    } else if (current === 0) {
      dots[i].classList.remove('active')
      dots[5].classList.add('active')
    } else {
      dots[i].classList.remove('active')
    }
  }
})

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

//자동 슬라이드
const next = () => {
  if (current >= images.length - 1) return
  slider.style.transition = '1000ms ease-in-out transform'
  current++
  slider.style.transform = `translateX(${-imgSize * current}px)`

  for (let i = 0; i < dots.length; i++) {
    if (dots[i].dataset.index == current) {
      dots[i].classList.add('active')
    } else if (current === 7) {
      dots[i].classList.remove('active')
      dots[0].classList.add('active')
    } else {
      dots[i].classList.remove('active')
    }
  }
}

nextBtn.addEventListener('click', () => {
  clearInterval(auto)
  next()
})

let auto = setInterval(next, 2000)

slider.addEventListener('mouseleave', () => {
  auto = setInterval(next, 2000)
})

slider.addEventListener('mouseenter', () => {
  clearInterval(auto)
})

//화면 사이즈 조절시 페이지 리로드
window.addEventListener('resize', reloadPage)
function reloadPage() {
  window.location.reload()
}
