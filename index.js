// blablabla
function test(event){
    event.preventDefault(event);
    let forecast=document.querySelector("#welcomeAndForm")
    forecast.innerHTML="<div>BLABLABLA<div/>"

}
let searchbutton=document.querySelector("#search-button")
searchbutton.addEventListener("click",test)

