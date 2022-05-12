var password = document.querySelector("#password")
var confirm = document.querySelector("#confirm")
var outputDiv = document.querySelector("#output")
var checkButton = document.querySelector("#check-button")













function  checkButtonHandler() {
    if (password === confirm ) {
      outputDiv.innerHTML=("password is matching");
    } else {
      outputDiv.innerHTML = ("password is not matching");
    }
}

checkButton.addEventListener("click", checkButtonHandler )