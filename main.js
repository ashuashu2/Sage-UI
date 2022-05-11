var a= 0

function btnHandler(){
    if (a==1){ 
    document.getElementById("unorder").style.display="none";
    return a=0;
}else{
    document.getElementById("unorder").style.display= "inline"
    return a=1;

   
}
}