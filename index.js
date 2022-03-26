// blablabla
function test(event){
    event.preventDefault(event);
    let forecast=document.querySelector("#welcomeAndForm")
    forecast.innerHTML=` <h3>Thank you for booking your break with us</h3>
    <h4>Summary</h4>
    <div id="date">Date</div>
    <div id="location">Location</div>
    <div id="temp">Temperature</div>`
}
let searchbutton=document.querySelector("#book-button")
searchbutton.addEventListener("click",test)

