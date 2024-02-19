//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

import React, { useEffect, useState } from "react"
function Tempapp(){
    const[city, setCity]=useState(null);
    const[search,setSearch]=useState("pune")

    useEffect(()=>{
        const store=async()=>{
          const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2667861b506659556f3a11196455e05b`)
          const result= await response.json()
          //console.log(result)
          setCity(result.main)
        }
        store()
      },[search])
    return(
        <>
        <div className="b1">
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputfield" placeholder="Enter City" onChange={(event)=>{
                    setSearch(event.target.value)
                }}></input>
                {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view symbol"></i>{search}
            </h2>
            <h1 className="temp">
              {city.temp}°cel
            </h1>
            <h3 className="tempmin_max">{city.temp_min}°cel | {city.temp_max}5.25°cel</h3>
            <div className="wave-one"></div>
          </div>
        </div>
      )} 
                
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Tempapp;