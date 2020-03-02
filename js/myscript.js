var apiKEY = "7ceafefd84a25c699da0eaa8561ff06b";


document.addEventListener('DOMContentLoaded', bindButtons);
var req = new XMLHttpRequest();


function bindButtons(){
    document.getElementById("citySubmit").addEventListener("click", function(event){
        var query = document.getElementById("city").value;
        req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKEY, true);
        req.send(null);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                var city = JSON.stringify(response.name);
                var temp = JSON.stringify(((9 / 5) * (response.main.temp - 273.15) + 32).toFixed(2));
                var humidity = JSON.stringify(response.main.humidity);
                document.getElementById("cityOut").textContent = "City: " + city;
                document.getElementById("temp").textContent = "Temperature: " + temp + " Fahrenheit";
                document.getElementById("humidity").textContent = "Humidity: " + humidity;
            }else{
                console.log("Error " + req.statusText);
            }
        })
        event.preventDefault();
    })
    document.getElementById("zipSubmit").addEventListener("click", function(event){
        var query = document.getElementById("zip").value;
        req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKEY, true);
        req.send(null);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                var city = JSON.stringify(response.name);
                var temp = JSON.stringify(((9 / 5) * (response.main.temp - 273.15) + 32).toFixed(2));
                var humidity = JSON.stringify(response.main.humidity);
                document.getElementById("cityOut").textContent = "City: " + city;
                document.getElementById("temp").textContent = "Temperature: " + temp + " Fahrenheit";
                document.getElementById("humidity").textContent = "Humidity: " + humidity;
            }else{
                console.log("Error " + req.statusText);
            }
        })
        event.preventDefault();
    })
    event.preventDefault();
}

document.getElementById('postSubmit').addEventListener('click', function(event){
    var payload = {text:null};
    var postResponse;

    payload.text = document.getElementById('post').value;


    req.open('POST', "http://httpbin.org/post", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            postResponse = JSON.parse(req.responseText);
            document.getElementById("postOutput").textContent = "Post output: " + postResponse.data;
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(JSON.stringify(payload));
    event.preventDefault();
});