var errorButton = document.querySelector("#error-button");
var loadingButton = document.querySelector("#loading-button");
var wishlistButton = document.querySelector("#wishlist-button");
var snackbarDiv = document.querySelector(".snackbar-1")

var errorMsg = document.querySelector("#error-msg");
var loadingMsg = document.querySelector("#loading-msg");
var wishlistMsg = document.querySelector("#wishlist-msg");





errorButton.addEventListener("click",  errorButtonHandler)





function errorButtonHandler(){
    errorMsg.style.visibility = "visible";
    loadingMsg.style.visibility="hidden"
    wishlistMsg.style.visibility = "hidden";
    snackbarDiv.style.visibility = "visible";



}

loadingButton.addEventListener("click",  loadingButtonHandler)
    


function loadingButtonHandler(){
    loadingMsg.style.visibility="visible"


    
    errorMsg.style.visibility = "hidden";
    
    wishlistMsg.style.visibility = "hidden";
    snackbarDiv.style.visibility = "visible";


}

wishlistButton.addEventListener("click",  wishlistButtonHandler)
    


function wishlistButtonHandler(){
    errorMsg.style.visibility = "hidden";
    loadingMsg.style.visibility="hidden"
    wishlistMsg.style.visibility = "visible";
    snackbarDiv.style.visibility = "visible";


}