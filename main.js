
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