console.log("YO its working still");
// alert("something")
// var username= prompt("Give me your name?");
// alert("hahah"+username);
var btn = document.querySelector("#app-but");
var textinout= document.querySelector("#text-input");
btn.addEventListener("click" , clickHandler())

function clickHandler() {
    {
        console.log("clicked");
       
        
    };
   
    console.log("input ye hoa",textinout.value );
}