const apikey = "c9996ce2b34519e93b493af3f21d5cd9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km / h";
    document.querySelector(".country").innerHTML = data.sys.country;
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){  
        weatherIcon.src ="weather-app-img/images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png"
    }
    
    document.querySelector('.weather').style.display = "block "
 
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) =>{
    if (event.key === "Enter"){
        event.preventDefault();
        searchBtn.click();
    }
})


