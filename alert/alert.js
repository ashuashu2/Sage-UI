


var errorAlert = document.querySelector("#error-alert-button");
var warningAlert = document.querySelector("#warning-alert-button");
var infoAlert = document.querySelector("#info-alert-button");
var successAlert = document.querySelector("#success-alert-button");
var output1Div = document.querySelector("#output1-div");
var output2Div = document.querySelector("#output2-div");
var output3Div = document.querySelector("#output3-div");
var output4Div = document.querySelector("#output4-div");







function errorEventHandler() {
    output1Div.innerHTML= ("❌ This is an error alert")


};
function warningEventHandler() {
    output2Div.innerHTML= ("⚠️ This is a warning alert")


};
function infoEventHandler() {
    output3Div.innerHTML= ("ℹ️ This is an info alert")


};
function successEventHandler() {
    output4Div.innerHTML= ("✅  This is a success alert")


};


errorAlert.addEventListener("click", errorEventHandler)
warningAlert.addEventListener("click", warningEventHandler)
infoAlert.addEventListener("click", infoEventHandler)
successAlert.addEventListener("click", successEventHandler)

