import './App.css';
import React, {useState} from "react";
import axios from "axios";
import worldMap from "./assets/world_map.png"
import region from "./helper/region.js";


function App() {
    const [countryName, setCountryName] = useState("");
    const [countryPop, setCountryPop] = useState("");
    const [countryFlag, setCountryFlag] = useState("");
    const [countryRegion, setCountryRegion] = useState("");
    const [error, setError] = useState("");
    const worldLink = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region';

    async function getWorld() {
        try {
            const responseWorld = await axios.get(worldLink);
            console.log(responseWorld.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function getCountryName() {
        try {
            const responseCountryName = await axios.get(worldLink);
            setCountryName(responseCountryName.data[101].name.official);
            // console.log(responseCountryName.data[0].name);
        } catch (e) {
            console.error(e);
        }
    }
    async function getCountryPop() {
        try {
            const responseCountryPop = await axios.get(worldLink);
            setCountryPop(responseCountryPop.data[101].population);
            // console.log(responseCountryPop.data[0].population);
        } catch (e) {
            console.error(e);
        }
    }
    async function getCountryFlag() {
        try {
            const responseCountryFlag = await axios.get(worldLink);
            setCountryPop(responseCountryFlag.data[101].flags.png);
            // console.log(responseCountryPop.data[0].population);
        } catch (e) {
            console.error(e);
        }
    }

    async function getCountryRegion() {
        try {
            const responseCountryRegion = await axios.get(worldLink);
            setCountryRegion(responseCountryRegion.data[101].region);
            // console.log(responseCountryPop.data[0].population);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <main>
                <img src={worldMap} alt="coloured map of the world"/>

                <h1>World Regions</h1>
                <button onClick={getWorld}>breng de wereld</button>
                <button onClick={getCountryName}>breng het eerste land</button>
                <button onClick={getCountryFlag}>breng de vlag</button>
                <button onClick={getCountryPop}>breng de populatie</button>
                <button onClick={getCountryRegion}>breng het continent</button>

                <div>
                    <ul>
                        <li>
                            <article>
                                <p className={countryRegion}>{countryName}</p>
                                <span>
                                    <img src={countryFlag} alt="flag of ({countryName})"/>
                                </span>
                                <p>{countryPop}</p>
                            </article>
                        </li>

                    </ul>
                </div>
            </main>
        </>
    )
}

export default App
