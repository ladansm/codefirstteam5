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
    forecast.innerHTML = `<h3>Thank you for booking your break with us</h3>
        <h4>Summary</h4>
        <div id="date">The weather on ${date}</div>
        <div id="location">In ${city}</div>  
        <div id="weather">The sky will have: ${weather}</div>
        <div id="temp">With a temperature of: ${temp}&deg;C</div>`

};

//add an event listener that will listen for the click of bookButton and then execute function makeForecast()
let bookButton = document.querySelector("#book-button");
bookButton.addEventListener("click",makeForecast);
