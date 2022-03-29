//this function takes the form input and changes the html accordingly
function makeForecast(event){
    event.preventDefault(event);    //this prevents the new HTML from immediately disappearing
    let forecast=document.querySelector("#welcomeAndForm")      //this is the section of HTML that will be rewritten
    
    let city = document.forms["mainForm"]["city-input"].value;
    if (city == "") {
        alert("Location must be filled out");
        return false;
    }
    
    let weather = document.forms["mainForm"]["weather-input"].value;
    if (weather == "") {
        alert("Weather must be filled out");
        return false;
    }

    let rain = "";
    if (weather == "Rain") {
        rain = `<div>You made it rain!<br>
        <audio controls autoplay hidden>
         <source src="https://www.rainymood.com/audio1112/0.m4a" type="audio/mp4" />
         <source src="https://www.rainymood.com/audio1112/0.ogg" type="audio/ogg" />
         <source src="https://www.rainymood.com/audio1112/0.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
        </div>`;
    }
    
    let temp = document.forms["mainForm"]["temp-input"].value;
    if (temp == "") {
        alert("Temperature must be filled out with a number");
        return false;
    }

    let date = document.forms["mainForm"]["date-input"].value;
    if (date == "") {
        alert("Date must be filled out");
        return false;
    }

    //this is what the HTML will be rewritten with
    forecast.innerHTML = `<h3>The weather forecast for ${city} on ${date} is as follows:</h3>
        <p>The sky will have: ${weather}</p>
        <p>The temperature will be: ${temp}&deg;C</p>
        <p class="hurricane">Thank you for using our services</p>
        ${rain}`

};

//add an event listener that will listen for the click of bookButton and then execute function makeForecast()
let bookButton = document.querySelector("#book-button");
bookButton.addEventListener("click",makeForecast);
