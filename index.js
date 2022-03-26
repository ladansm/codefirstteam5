// blablabla
function test(event){
    event.preventDefault(event);
    let forecast=document.querySelector("#welcomeAndForm")
    let cityInput=document.querySelector('#city-input')
    let city=cityInput.value
    let tempInput=document.querySelector('#temp-input')
    let temp=tempInput.value
    let dateInput=document.querySelector('#date-input')
    let date=dateInput.value
    let weatherInput=document.querySelector('#weather-input')
    let weather=weatherInput.value
    
    forecast.innerHTML=`<h3>Thank you for booking your break with us</h3>
    <h4>Summary</h4>
    <div id="date">${date}</div>
    <div id="location">${city}</div>
    <div id="weather">${weather}</div>
    <div id="temp">${temp}</div>`

}
let searchbutton=document.querySelector("#book-button")
searchbutton.addEventListener("click",test)

