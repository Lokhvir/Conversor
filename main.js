/*$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log("latitude: " + lat +"<br>longitude: " + long);

      //var api = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=921308390146683ebb48203104677433';
      var api = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon=' + long +'&appid=921308390146683ebb48203104677433';
      console.log(api);

      //carregar api open weather
      $.getJSON(api, function(data){
        var city = data.city.name;
        var country = data.city.coord.country;
        //wind in km/h
        //var wind = decimais(((data.wind.speed*60)*60)/1000);
        //var humidity = data.main.humidity;
        //var kTemp = data.main.temp;
        //somente um numero depois da virgula
        function decimais (x){
          return Number.parseFloat(x).toFixed(1);
        }

        //converter para fahrenheit
        //var fTemp = decimais((kTemp)*(9/5)-459.67);
        //converter para celsius
        //var cTemp = decimais(kTemp-273);

        $.each(data.list, function(index, val){
          console.log(val.main.temp)
        })
      });
    });
  }
});*/

let input = document.querySelector("#in");
let output = document.querySelector("#out");
let switcher = document.querySelector("#switch");
let saveInput;
let saveOutput;
let cToF = (input.value*1.8)+32;
let fToC = (input.value-32)/1.8;

window.addEventListener('load', f => {
  input.value = "";
  output.value = "";
});

function decimais (x){
  return Number.parseFloat(x).toFixed(1);
}

switcher.addEventListener('click', e=> {
  let inL = document.querySelector("#inLabel");
  let outL = document.querySelector("#outLabel");
  if (input.dataset.value == "celsius"){
    saveInput = input.value;
    saveOutput = output.value;
    input.dataset.value = "fahrenheit";
    inL.innerHTML = "Fahrenheit";
    outL.innerHTML = "Celsius";
    input.value = saveOutput;
    output.value = saveInput;
    //switcher.style = "background: linear-gradient(to left, #ff605b, #96fbff);";
  } else {
    saveInput = input.value;
    saveOutput = output.value;
    input.dataset.value = "celsius";
    inL.innerHTML = "Celsius";
    outL.innerHTML = "Fahrenheit";
    input.value = saveOutput;
    output.value = saveInput;
    //switcher.style = "background: linear-gradient(to right, #ff605b, #96fbff);";
  }
  console.log(input.dataset.value);
})

input.addEventListener('input', e =>{
  //Fahrenheit to celsius formula
  //let cToF = Math.round((input.value*1.8)+32);
  let cToF = decimais((input.value*1.8)+32);
  //celsius to Fahrenheit formula
  //      let fToC = Math.round((input.value-32)/1.8);
  let fToC = decimais((input.value-32)/1.8);


  if (input.dataset.value == "celsius" && input.value != "" && input.value != "-"){
    output.value = cToF;
  } else if (input.dataset.value == "fahrenheit" && input.value != "" && input.value != "-"){
    output.value = fToC;
  } else if (input.value == "-"){
    output.value = "";
  } else{
    input.value = "";
    output.value = "";
  }
});

output.addEventListener('input', e=>{
  //Fahrenheit to celsius formula
  let cToF = decimais((output.value*1.8)+32);
  //celsius to Fahrenheit formula
  let fToC = decimais((output.value-32)/1.8);

  //Fahrenheit to celsius
  if (output.dataset.value == "fahrenheit" && output.value != "" && output.value != "-"){
    input.value = fToC;
  } else if (output.dataset.value == "celsius" && output.value != "" && output.value != "-"){
    input.value = cToF;
  } else if (output.value == "-"){
    input.value = "";
  } else{
    input.value = "";
    output.value = "";
  }
});
