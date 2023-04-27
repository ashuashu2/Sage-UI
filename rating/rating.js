var stars = document.querySelectorAll(".stars")
var submit = document.querySelector(".rating-submit-button")
var tryAgain= document.querySelector(".try-again-button")

var output= document.querySelector(".output")
var ratings = document.querySelector(".rating-div")

    for (i = 0; i < stars.length; i++) {
        stars[i].starValue = (i+1)
        const arr1 = ["click", "mouseover", "mouseout"]
      
        for (let j = 0; j < arr1.length; j++) {
            stars[i].addEventListener(arr1[j], showRating);
          }
       
      
    }


submit.addEventListener("click",show)
tryAgain.addEventListener("click",tryAgains)
function show(){

    ratings.innerHTML = `Thank-you for submiting your feedback`
    tryAgain.style.visibility = "visible" 
   

}
function tryAgains(){
    window.location.reload()
}




function showRating(e){
    
let type = e.type
let starValue = this.starValue
stars.forEach(function(element,index) {
if(type==="click"){

if(index < starValue){
    output.innerHTML = `You rated ${starValue} star`





}

}
if(type==="mouseover"){

    if(index < starValue){
    
    
    
        element.classList.add("red")
    } else{
        element.classList.remove("red")
    }
    
    }
    if(type==="mouseout"){

    
            element.classList.remove("red")
       
        
        }
})
}
