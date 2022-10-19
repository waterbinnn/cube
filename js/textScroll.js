//텍스트 스크롤

const flowText1 = document.querySelector('.back-txt.top')
const flowText2 = document.querySelector('.back-txt.bottom')

const textArr1 = '(G)-IDLE 5TH MINI ALBUM'.split(' ')
const textArr2 = 'NUDE LOVE CHANGE RESET SCULPTURE DART(X-FILE)'.split(' ')

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00a0\u00a0\u00a0`
  }
}
initTexts(flowText1, textArr1)
initTexts(flowText2, textArr2)

let count1 = 0
let count2 = 0

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate(0)`
    count = 0
  }
  element.style.transform = `translateX(${count * direction}px)`
  return count
}

function scrollText() {
  count1++
  count2++

  count1 = marqueeText(count1, flowText1, -1)
  count2 = marqueeText(count2, flowText2, 1)

  window.requestAnimationFrame(scrollText)
}

scrollText()

window.addEventListener('scroll', () => {
  count1 += 15
  count2 += 15
})

//가로스크롤 제어

let sticky = document.querySelector('.sticky')
let stickyParent = document.querySelector('.members-container')

let scrollWidth = sticky.scrollWidth
let verticalScrollHeight =
  stickyParent.getBoundingClientRect().height -
  sticky.getBoundingClientRect().height

//Scroll function
function horizontalScroll() {
  let stickyPosition = sticky.getBoundingClientRect().top
  if (stickyPosition > 100) {
    return
  } else {
    let scrolled = stickyParent.getBoundingClientRect().top
    sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.85
  }
}

document.addEventListener('scroll', horizontalScroll)
