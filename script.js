function getWeather()
{
    // Today's Date
    let date = new Date();
    let today = date.getDate();

    let weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let weekNumber = date.getDay() - 1;
    let week = weekArray[weekNumber];

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthNumber = date.getMonth();
    let month = monthArray[monthNumber];

    let year = date.getFullYear();

    let fullDate = `${today} ${month}, ${week}, ${year}`;

    // Using CurrentWeather API
    let query = document.getElementById("cityInput").value;
    let apiKey = "76f4064a5c27da0aa7ec0aa27bcc4af9";
    let unit = "metric";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        //weather main data
        let main = data.main;
        let description = data.weather[0].main;
        let temp = Math.round(data.main.temp);
        let pressure = data.main.pressure;
        let humidity = data.main.humidity;
        let icon = data.weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        let cityName = query.charAt(0).toUpperCase() + query.slice(1);

        document.getElementById("description").innerHTML = description;
        document.getElementById("temp").innerHTML = temp + "°C";
        document.getElementById("pressure").innerHTML = pressure;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("name").innerHTML = cityName;
        document.getElementById("time").innerHTML = fullDate;
        document.getElementById("icon").setAttribute("src", iconURL);

        //background

        let linearGradient = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";

        switch (description) {

          case "Snow" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            break;
            
          case "Clouds" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            break;
            
          case "Fog" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            break;
            
          case "Rain" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif')";
            break;
            
          case "Clear" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;

          case "Drizzle" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')";
            break;
            
          case "Thunderstorm" :
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            break;
            
          default:
            document.getElementById("bg").style.background = linearGradient + ", url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;
            
        }
    });

    document.getElementById("bg").classList.remove("hide");
}
