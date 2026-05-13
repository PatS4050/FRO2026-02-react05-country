import './App.css';
import React, {useState} from "react";
import axios from "axios";


function App() {
    const [countryName, setCountryName] = useState ("");
    const worldLink ='https://restcountries.com/v3.1/all?fields=name,flags,population,region';
    // const worldLink ='https://restcountries.com/v3.1/all?fields=name';


    async function getWorld () {
        try {
            const responseWorld = await axios.get(worldLink);
            console.log(responseWorld.data);
        } catch (e) {
            console.error(e);
        }
    }
    async function getCountryName () {
        try {
            const responseCountryName = await axios.get(worldLink);
            setCountryName (responseCountryName.data[0].name);
            // return setCountryName = responseCountryName.data[0].name;
            // console.log(responseCountryName.data[0].name);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
           <h1>Maak je applicatie hier!</h1>
            <button onClick={getWorld}>breng de wereld</button>
            <p>resultaat</p>
            <button onClick={getCountryName}>breng het eerste land</button>
            <ul>
                <li>naam land {countryName}</li>
            </ul>
        </>
    )
}

export default App
