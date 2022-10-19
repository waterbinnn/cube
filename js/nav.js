const company = document.querySelector('#company')
const artist = document.querySelector('#artists')
const multimedia = document.querySelector('#multimedia')
const companyList = document.querySelector('.menu.item1')
const artistsList = document.querySelector('.menu.item2')
const multimediaList = document.querySelector('.menu.item3')

const navList = [company, artist, multimedia]
const menu = [companyList, artistsList, multimediaList]

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener('mouseover', () => {
    menu[i].classList.toggle('active')
  })
}

for (let i = 0; i < navList.length; i++) {
  menu[i].addEventListener('mouseleave', () => {
    menu[i].classList.remove('active')
  })
  navList[i + 1].addEventListener('mouseover', () => {
    menu[i].classList.remove('active')
  })
}
