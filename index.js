// blablabla
function test(event){
    event.preventDefault(event);
    let forecast=document.querySelector("#welcomeAndForm")
    let cityInput=document.querySelector('#city-input')
   
    let city=cityInput.value
   
    forecast.innerHTML=`<h3>Thank you for booking your break with us</h3>
    <h4>Summary</h4>
    <div id="date">Date</div>
    <div id="location">${city}</div>
    <div id="temp">Temperature</div>`
}
let searchbutton=document.querySelector("#book-button")
searchbutton.addEventListener("click",test)

