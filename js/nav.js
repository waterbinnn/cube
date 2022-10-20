const company = document.querySelector('#company')
const artist = document.querySelector('#artists')
const multimedia = document.querySelector('#multimedia')
const companyList = document.querySelector('.menu.item1')
const artistsList = document.querySelector('.menu.item2')
const multimediaList = document.querySelector('.menu.item3')

const mobileBtn = document.querySelector('.menu-icon')
const mobileGnb = document.querySelector('.mobile-menulist')

const navList = [company, artist, multimedia]
const menu = [companyList, artistsList, multimediaList]

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener('mouseover', () => {
    menu[i].classList.toggle('active')
  })
  navList[i].addEventListener('click', () => {
    menu[i].classList.toggle('active')
  })
}

for (let i = 0; i < navList.length; i++) {
  menu[i].addEventListener('mouseleave', () => {
    menu[i].classList.remove('active')
    menu[i + 1].classList.remove('active')
    menu[i - 1].classList.remove('active')
  })
  menu[i].addEventListener('keydown', () => {
    menu[i - 1].classList.remove('active')
    menu[i + 1].classList.remove('active')
  })
  menu[i].addEventListener('click', () => {
    menu[i - 1].classList.remove('active')
    menu[i + 1].classList.remove('active')
  })
}

mobileBtn.addEventListener('click', () => {
  mobileGnb.classList.add('active')
})

mobileGnb.addEventListener('mouseleave', () => {
  mobileGnb.classList.remove('active')
})
