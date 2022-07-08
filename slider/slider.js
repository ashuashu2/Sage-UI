// *******************  slider (using button)               *********************************




var slides = document.getElementsByClassName("slides");



var i =0

function slideShow(index){

if(i < 0 ){
    i = slides.length-1
   
  }
  if(i > slides.length-1){
    
    i =0
  }
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display= "none"
  
    
  }
 slides[i].style.display = "block"


}
slideShow()
function controler(x)
{
  i = i + x

  return slideShow()
}






















// ******************* automatic slider (using set timeout)               *********************************




var slides2 = document.getElementsByClassName("slides2");



var i =0 
function automaticSideShow(){
  for (let index = 0; index < slides2.length; index++) {
    slides2[index].style.display = "none"
   
    
  }
  i++
  if (i > slides2.length){
    i =1
  } 




  slides2[i-1].style.display = "block" 
  setTimeout(automaticSideShow,2000)
  
}
automaticSideShow()


