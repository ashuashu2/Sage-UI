// *******************  slider (using button)               *********************************




var slides = document.getElementsByClassName("slides");



var i = 0

function slideShow(index) {

  if (i < 0) {
    i = slides.length - 1

  }
  if (i > slides.length - 1) {

    i = 0
  }
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none"


  }
  slides[i].style.display = "block"


}
slideShow()

function controler(x) {
  i = i + x

  return slideShow()
}

























// ******************* automatic slider (using set timeout)               *********************************




var slides2 = document.getElementsByClassName("slides2");



var i = 0

function automaticSideShow() {
  for (let index = 0; index < slides2.length; index++) {
    slides2[index].style.display = "none"


  }
  i++
  if (i > slides2.length) {
    i = 1
  }




  slides2[i - 1].style.display = "block"
  setTimeout(automaticSideShow, 2000)

}
automaticSideShow()




// ****************    slide (using dot)           *******************************



var slides3 = document.getElementsByClassName("slides3");



var i = 0

function dotSlideShow() {


  for (let index = 0; index < slides3.length; index++) {
    slides3[index].style.display = "none"


  }
  slides3[i].style.display = "block"


}
dotSlideShow()

function newControler5(x) {
  i = 4

  return dotSlideShow()
}

function newControler1(x) {
  i = 0

  return dotSlideShow()
}

function newControler2(x) {
  i = 1

  return dotSlideShow()
}

function newControler3(x) {
  i = 2

  return dotSlideShow()
}

function newControler4(x) {
  i = 3

  return dotSlideShow()
}















var hamburgerButton = document.querySelector("#hamburger-button")
var linkButtons = document.querySelector(".link-items-li")
var listItems = document.querySelector(".links-div")
hamburgerButton.addEventListener("click", hamburgerButtonHandler)
linkButtons.addEventListener("click", linkButtonsHandler)



isOpen = false


function hamburgerButtonHandler() {



  if (isOpen === false) {
    isOpen = true

    
    listItems.classList.remove("links-div")

    listItems.classList.add("hamburger-list-item")

  } else {
    isOpen = false
    listItems.classList.remove("hamburger-list-item")

    listItems.classList.add("links-div")

  }
}
function linkButtonsHandler(){
  isOpen = false
}