//this function takes the form input and changes the html accordingly
function makeForecast(event){
    event.preventDefault(event);    //this prevents the new HTML from immediately disappearing
    let forecast=document.querySelector("#welcomeAndForm")      //this is the section of HTML that will be rewritten
    let cityInput=document.querySelector('#city-input')
    let city=cityInput.value
    let tempInput=document.querySelector('#temp-input')
    let temp=tempInput.value
    let dateInput=document.querySelector('#date-input')
    let date=dateInput.value
    let weatherInput=document.querySelector('#weather-input')
    let weather=weatherInput.value

    //this is what the section will be rewritten with
    forecast.innerHTML = `<h3>Thank you for booking your break with us</h3>
    <h4>Summary</h4>
    <div id="date">The weather on ${date}</div>
    <div id="location">In ${city}</div>  
    <div id="weather">The sky will have: ${weather}</div>
    <div id="temp">With a temperature of: ${temp}°C</div>`
};

//add an event listener that will listen for the click of bookButton and then execute function test()
let bookButton = document.querySelector("#book-button");
bookButton.addEventListener("submit",makeForecast);