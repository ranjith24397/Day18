var restCountryURL = "https://restcountries.com/v3.1/all"
// 
fetch(restCountryURL).then((value)=>{
     return value.json();
 }).then((objdata)=>{
  let data1 = "";
 objdata.map((country)=>{
    data1 += `<div id="row" >
    <div class="col-lg-4 col-sm-12" style="width: 18rem;">
      <h5 class="card-header">${country.name.common}</h5>
      <img src="${country.flags.png}" alt="...">
      <div class="card-body">
        <p class="capital">Capital: ${country.capital}</p>  
        <p class="region">Region: ${country.region}</p>
        <p class="countrycode">Country Code: ${country.cca3}</p>
        <a href="#" class="btn btn-primary">Click for weather</a>
    </div>`
  });
    document.getElementById("card").innerHTML = data1;
}).catch((err)=>{
  console.log(err);
})

//api weather call

var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=041973397ea993234cea60fbc582dc8b`
var lat = 52.5;
var long = 5.75;
var apiKeys = "041973397ea993234cea60fbc582dc8b"



var button = document.getElementById("btn");

button.addEventListener('click', (()=>{
  fetch(weatherURL).then((weather)=>{
    alert(weather);
  })
}))

