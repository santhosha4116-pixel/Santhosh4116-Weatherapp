import { useState } from "react"
import axios, { Axios } from "axios"


function App() {
 const [cityname,setcityname] = useState("")
 const [tem,settem] =useState("")
 const [descr,setdescr] = useState("")
 const [weather,setweather] = useState("")

 function handleenter(event){
  setcityname(event.target.value)
 }
 function valueented(){
  var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=050ccbfb807faae52bbd389d7264e2d2`)
  weatherdata.then(function(Weather){
     setdescr( Weather.data.weather[0].description)
     settem( Weather.data.main.temp+"°C")
     setweather( Weather.data.weather[0].main)
  }).catch(()=>{
    alert("Please Enter Correct City Name")
  })

  
 
  
 }
  return (<div>
    <div className='text-center p-7 font-poppins'>
      <div className="bg-[#90accb] rounded-md p-10 text-center items-center">
        <div className=" flex flex-col gap-3 items-center justify-center ">
          <h1 className="text-4xl font-bold text-[#212d60] mt-4 p-12 ">Weather Report</h1>
          <h2 className="text-2xl text-white " >I can give a weather report for your city!</h2>
          <input  onChange={handleenter} placeholder="Enter Your Cityname" className="bg-[#212d60]   w-[30%]  h-[35px] rounded-md outline-0 text-white p-1 transition-all duration-500 ease-in-out    hover:scale-110 translate"></input>
          <button onClick={valueented} className="bg-[#212d60] p-1.5   text-white rounded-md  transition-all duration-500 ease-in-out    hover:scale-110 translate ">Get Report</button>
        </div>
        <div className=" xl:grid-cols-3 grid gap-5 mt-8 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-[#212d60]  px-8.5 py-10 mx-14 rounded-md transition-all duration-500 ease-in-out    hover:scale-120 translate flex-wrap flex flex-col ">
            <h1 className="text-2xl text-white font-medium mb-2 bg-[#90accb] rounded-md ">Weather</h1>
            <h1 className="text-white  text-2xl rounded-md font-light p-1.5 ">{weather}</h1>
          </div>
  <div className="bg-[#212d60]  p-10  rounded-md transition-all mx-14 px-8.5 py-10 duration-500 ease-in-out    hover:scale-120 translate flex-wrap flex flex-col ">
            <h1 className="text-2xl text-white font-medium mb-2 bg-[#90accb] rounded-md ">Description</h1>
            <h1 className="text-white  text-2xl rounded-md font-light  p-1.5">{descr}</h1>
          </div>
          <div className="bg-[#212d60]  p-10 rounded-md transition-all mx-14 px-8.5 py-10 duration-500 ease-in-out    hover:scale-120 translate flex-wrap flex flex-col ">
            <h1 className="text-2xl text-white font-medium mb-2 bg-[#90accb] rounded-md ">Temperture </h1>
            <h1 className="text-white text-2xl rounded-md font-light p-1.5">{tem}</h1>
          </div>
          </div>
        </div>
      </div>

    </div>
)
}

export default App
