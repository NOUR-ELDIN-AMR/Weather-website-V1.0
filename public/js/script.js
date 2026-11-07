

let formf=document.getElementById('form1')

    const address= document.getElementById('address')
formf.addEventListener('submit',(e)=>{
 e.preventDefault()
// dataj()
fun1();
 address.value='' // input so clear the value
// loadWeatherData();
 // form.reset()


})

async function loadWeatherData(x) {

    const response = await fetch("/weather.json");

    const weatherConditions = await response.json();

    /* weathercondtion[
JavaScript uses square brackets [] for property/key access on objects too.

const person = {
    name: "Nour",
    age: 19
};

console.log(person["name"]);
weatherConditions[1183]
{
    "name": "Light rain",
    "icon": "🌧️"
}
    ] */
    // console.log(weatherConditions);

    // Test it
    const weatherCode = x;

    const weather = weatherConditions[weatherCode].icon;

console.log(weather)
}
// async function loadWeatherData(x) {

//     const response = await fetch("/weather.json");

//     const weatherConditions = await response.json();

//     // console.log(weatherConditions);
 
//     // Test it
//     const weatherCode = x;

//     const weather = weatherConditions[weatherCode];

// console.log(weather)
// }



const locationf=document.getElementById('location')
const forecastf=document.getElementById('forecast')
const errorf=document.getElementById('error')
const code=document.getElementById('code')
const video = document.getElementById('videoC');
const bg = document.getElementById('background');

const fun1= async ()=>{

    const address= document.getElementById('address').value;
const Url = await fetch(`/weather?address=${encodeURIComponent(address)}`)
const codeurl = await fetch(`/code?address=${encodeURIComponent(address)}`)

    const data= await Url.json() // هاتها json 
    const datacode= await codeurl.json() // هاتها json 
// كل الي تحت هيكون عامل تلامس مع ال 
//weather 
//app.js بتاع


if (data.error) {

    // Show main background
    bg.style.display = "block";
    bg.style.backgroundImage = "url('/Images/aaa.png')";

    // Hide weather video
    video.style.display = "none";

    // Clear old weather information
    errorf.innerHTML = data.error;
    locationf.innerHTML = "";
    forecastf.innerHTML = "";
    code.innerHTML = "";

}
    else{
        locationf.innerHTML=data.location;
        forecastf.innerHTML=data.forecast;
        errorf.innerHTML="";
            // video.style.display = "block";
            //   bg.style.display = "none";

if(datacode.code==1000){
 
       loadWeatherData(datacode.code);
        code.innerHTML="Country code is "+ datacode.code ;
           bg.style.display="none";
           video.style.display = "block";
       video.src = "/Images/4K FREE STOCK FOOTAGE - sunny day clouds slow timelapse.mp4";
    

}
else if (datacode.code == 1009) {

    loadWeatherData(datacode.code);

    code.innerHTML = "Country code is " + datacode.code;

    bg.style.display = "none";
    video.style.display = "block";

    video.src = "/Images/rain.mp4";

    video.load();
    video.play();
} /* and else if continuse as every time some country there weather change so there code change */
else if (datacode.code == 1063) {

    loadWeatherData(datacode.code);

    code.innerHTML = "Country code is " + datacode.code;

    bg.style.display = "none";
    video.style.display = "block";

    video.src = "/Images/rain.mp4";

    video.load();
    video.play();
}
// else{
//     video.style.display = "none";
//     bg.style.display="block"
// // bg.style.backgroundImage = "url('/Images/aaa.png')";
// }

       
        // If you're using Express's public folder     public/Images/rain.mp4   write it down 
        
    }
}

// const dataj = async () => {
//     const data = await fetch('/weather.json');

//     const text = await data.text();

//     console.log(text);
// };

/* res.body.current.condtion.code */

/* 
لو الكود بتاع ال بخقثؤشسف ===
الكود بتاع الجسون 

ؤهيطلع icon

*/