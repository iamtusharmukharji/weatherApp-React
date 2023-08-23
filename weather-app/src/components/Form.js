import './form.css'
import React, {useState} from 'react'



function Formcomp({ handleClick }) {
    return (
        <>
        <form className="styled-form">
           <h2>Get Weather</h2>
           <div className="form-group">
               <label htmlFor="name">Latitude:</label>
               <input type="text" id="lat" name="lat" required />
           </div>
           <div className="form-group">
               <label htmlFor="email">Longitude</label>
               <input type="text" id="long" name="long" required />
           </div>
           <button type="submit" onClick={handleClick}>Submit</button>
       </form>
   </>
    );
  }
  

function Weathercomp({handleClick}){
    let lat = document.getElementById('lat').innerText;
    console.log("lati: ",lat);

    return(
        <>
        <form className="styled-form">
           <h2>Get Weather</h2>
           
           <button type="submit" onClick={handleClick}>Back</button>
       </form>
        </>
    );
}
  

export default function Form() {
    const [formc, setComponent] = useState(true)
    
    const getWeather=()=>{
        setComponent(!formc);
    };

    return (
        <>
            {formc ? (
          <Formcomp handleClick={getWeather} />
        ) : (
          <Weathercomp handleClick={getWeather} />
        )}
        </>
    );
}