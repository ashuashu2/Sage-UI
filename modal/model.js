var openButton = document.querySelector("#open-button");
var closeButton = document.querySelector("#close-button");
var content = document.querySelector("#content");


openButton.addEventListener("click",  openButtonHandler)
    


function openButtonHandler(){
    content.style.visibility = "visible";
    closeButton.style.visibility="visible"
    openButton.style.visibility = "hidden";


}


closeButton.addEventListener("click",  closeButtonHandler)
    


function closeButtonHandler(){
    content.style.visibility = "hidden";
    openButton.style.visibility = "visible";
    closeButton.style.visibility="hidden"



}