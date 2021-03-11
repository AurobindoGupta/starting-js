// console.log("YO its working still");
// alert("something")
// var username= prompt("Give me your name?");
// alert("hahah"+username);
var btn = document.querySelector("#app-but");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");
console.log(textInput);
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTransalationURL(text){
    return serverURL + "?"+ "text=" + text ;
}
function errorHndler(error){
    console.log("error handler", error);
    alert("Stuff not doing well back here.. wait");
}


function clickHandler() {
    {
        console.log("clicked");
        console.log("input ye hoa", textInput.value);
        var input_text = textInput.value; //taking input


        fetch(getTransalationURL(input_text))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHndler)



    }


}
btn.addEventListener("click", clickHandler);