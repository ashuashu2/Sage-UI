// ****************  basic snackbar  ************************

var addToCartButton = document.querySelector("#add-to-card-button");
var sentMailButton = document.querySelector("#sent-mail-button");
var removeFromCartButton = document.querySelector("#remove-cart-button");

var OutputDiv = document.querySelector("#output-div");






addToCartButton.addEventListener("click",  addToCartButtonHandler)





function addToCartButtonHandler(){
    OutputDiv.innerText = "Added To Cart 🛒"
    setTimeout(() => {
        OutputDiv.innerText = ""
    
            
        }, 1000);
    OutputDiv.classList.remove("mail")
    OutputDiv.classList.remove("remove")

    OutputDiv.classList.add("add")



    



}

sentMailButton.addEventListener("click",  sentMailButtonHandler)
    


function sentMailButtonHandler(){
    OutputDiv.innerHTML = "Sending Mail 📧"
    setTimeout(() => {
        OutputDiv.innerText = ""
    
            
        }, 1000);
    OutputDiv.classList.remove("remove")
    OutputDiv.classList.remove("add")
    OutputDiv.classList.add("mail")



    


}

removeFromCartButton.addEventListener("click",  removeFromCartButtonHandler)
    


function removeFromCartButtonHandler(){
    OutputDiv.innerText = "Remove From Cart 🛒"
    setTimeout(() => {
    OutputDiv.innerText = ""

        
    }, 1000);
    OutputDiv.classList.remove("add")
    OutputDiv.classList.remove("mail")

    OutputDiv.classList.add("remove")




}
























// *****************    positioned snackbar      *****************



var  topLeftButton = document.querySelector("#top-left-button")
var topRightButton = document.querySelector("#top-right-button")
var bottomRightButton = document.querySelector("#bottom-right-button")
var bottomLeftButton = document.querySelector("#bottom-left-button")
var positionedOutputDiv = document.querySelector(".positioned-snackbar-output-div")


topLeftButton.addEventListener("click" ,topLeftButtonHandler)
topRightButton.addEventListener("click" ,topRightButtonHandler)
bottomRightButton.addEventListener("click" ,bottomRightButtonHandler)
bottomLeftButton.addEventListener("click" ,bottomLeftButtonHandler)


function topLeftButtonHandler(){
    positionedOutputDiv.innerHTML= "Top Left"
    positionedOutputDiv.style.visibility = "visible"
    positionedOutputDiv.classList.remove("bottomLeft")
    positionedOutputDiv.classList.remove("bottomRight")
    positionedOutputDiv.classList.remove("topRight")
    positionedOutputDiv.classList.add("topLeft")
    setTimeout(() => {
    positionedOutputDiv.style.visibility = "hidden"

        
    }, 700);

}

function topRightButtonHandler(){
    positionedOutputDiv.innerHTML= "Top Right"
    positionedOutputDiv.style.visibility = "visible"
    positionedOutputDiv.classList.remove("topLeft")
    positionedOutputDiv.classList.remove("bottomRight")
    positionedOutputDiv.classList.remove("bottomLeft")

    positionedOutputDiv.classList.add("topRight")
    setTimeout(() => {
        positionedOutputDiv.style.visibility = "hidden"
    
            
        }, 700);

}

function bottomRightButtonHandler(){
    positionedOutputDiv.innerHTML= "Bottom Right"
    positionedOutputDiv.style.visibility = "visible"
    positionedOutputDiv.classList.remove("topLeft")
    positionedOutputDiv.classList.remove("bottomLeft")
    positionedOutputDiv.classList.remove("topRight")
    positionedOutputDiv.classList.add("bottomRight")
    setTimeout(() => {
        positionedOutputDiv.style.visibility = "hidden"
    
            
        }, 700);
    
}


function bottomLeftButtonHandler(){

    positionedOutputDiv.innerHTML= "Bottom Left"
    positionedOutputDiv.style.visibility = "visible"
    positionedOutputDiv.classList.remove("topLeft")
    positionedOutputDiv.classList.remove("bottomRight")
    positionedOutputDiv.classList.remove("topRight")
    positionedOutputDiv.classList.add("bottomLeft")
    setTimeout(() => {
        positionedOutputDiv.style.visibility = "hidden"
    
            
        }, 700);
    
}













// **************     a toast button        ***************
var toastButton = document.querySelector("#A-toast-button")
var toastDiv = document.querySelector(".a-toast-output-div")
var crossButton = document.querySelector(".a-toast-x-button")


toastButton.addEventListener("click",toastButtonHandler)
crossButton.addEventListener("click",crossButtonHandler)


function toastButtonHandler(){
    toastDiv.style.visibility = "visible"
    setTimeout(() => {
    toastDiv.style.visibility = "hidden"
        
    }, 2000);

}
function crossButtonHandler(){
    toastDiv.style.visibility = "hidden"
   

}


