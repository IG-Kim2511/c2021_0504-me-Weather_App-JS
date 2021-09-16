
//🍈 let, const

const url_key = "15a7652718e5b6e803f265472ea2cad2";

const weather = {};

weather.temperature = {
    unit: "celsius"
}

//🍈 selector

const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");


// 🍈 API
function getWeather(){

    fetch(url_key)
  .then(response => response.json())
  .then(data => console.log(data));
    
}



//  C 58 . JS 58








// 🍈 API
// /covid-19/counties
// let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';
// let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=500';



// // 🍈 let, const

// // 🍈 selectors

// let windowsContainer = document.querySelector('.windows_container');
// let covidWindow = document.querySelector('.covid_window');



// //🍈 axios 

// function mynaming() {    

//   axios.get(url)
//   .then(function (response) {
//       // handle success   
//       console.log(response)    
//   })
//   .catch(function (error) {
//       // handle error
//       console.log(error);
//   })
//   .then(function () {
//       // always executed
//   });   
// }

// mynaming();


// //🍈 axios /  rapidApi 사용하기

// function covidStates() {    

//   const options = {
//     method: 'GET',
//     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',
//     headers: {
//       'x-rapidapi-key': api.rapidApiKey,    //config안의 rapid api key를 변수로 가져옴
//       'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });


// }
// covidStates();



// // 🍈 event Listeners

// //  functions for sharing 

// // 🍈 functions standalone
// function name(event) {
//   // todo DIV
//   // Create LI
// }

