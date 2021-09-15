/*var city = "Delhi";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=df1048e6cf86c06206789cc427d613fd",function(data){
 console.log(data);

 var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
 console.log(icon);

 $('.icon').attr('src',icon);
 var temp = Math.floor(data.main.temp);
 console.log(temp);
 $('.temp').append(temp-273 + "°C");
 var weather = data.weather[0].main;
 $('.weather').append(weather);
 var humidity = (data.main.humidity);
 console.log(humidity);
 $('.humidity').append(humidity);




});*/

const btn = document.getElementById("updateCityInput");
btn.addEventListener("click",updateCityInput);

function updateCityInput(){
    city = document.getElementById("selectCityText").value;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=df1048e6cf86c06206789cc427d613fd",function(data){
        console.log(data);
        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        $('.icon').attr('src',icon);
        var temp = Math.floor(data.main.temp);
        console.log(temp);
        $('.temp').append(temp-273 + "°C");
        var weather = data.weather[0].main;
        $('.weather').append(weather);
        var humidity = (data.main.humidity);
        console.log(humidity);
        $('.humidity').append(humidity + "%");

        
    })

}
