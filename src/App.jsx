import './App.css';
import React, {useState} from "react";
import axios from "axios";
import worldMap from "./assets/world_map.png"
import region from "./helper/region.js";
// import worldLink from 'https://restcountries.com/v3.1/all?fields=name,flags,population,region';


function App() {
    const [countryName, setCountryName] = useState("");
    const [countryPop, setCountryPop] = useState("");
    // const [countryFlag, setCountryFlag] = useState("");
    // const [countryRegion, setCountryRegion] = useState("");
    const [country, setCountry] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const worldLink = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region';

    async function getWorld() {
        toggleError(false)
        toggleLoading(true)
        try {
            const responseWorld = await axios.get(worldLink);
            setCountry(responseWorld.data);
            // const setCountryPop = country.data;
            setCountryPop(country.population);
            // setCountryFlag(country.flags.png);
            // setCountryName(country.name.official);
            // setCountryRegion(country.region);
            // console.log(responseWorld.data);
            console.log(setCountry)
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false)
        }
    }
    // function getCountryPop(country) {
    //     const setCountryPop = country.data.population
    //     return setCountryPop
    // }
//     DEZE DOET HET WEL   //

    // async function getWorld() {
    //     toggleError(false)
    //     toggleLoading(true)
    //     try {
    //         const responseWorld = await axios.get(worldLink);
    //         setCountryPop(responseWorld.data[196].population);
    //         setCountryFlag(responseWorld.data[196].flags.png);
    //         setCountryName(responseWorld.data[196].name.official);
    //         setCountryRegion(responseWorld.data[196].region);
    //         console.log(responseWorld.data);
    //     } catch (e) {
    //         toggleError(true)
    //         console.error(e);
    //     } finally {
    //         toggleLoading(false)
    //     }
    // }


// Functies apart nog even laten staan ter lering voor later //

    // async function getCountryName() {
    //     try {
    //         const responseCountryName = await axios.get(worldLink);
    //         setCountryName(responseCountryName.data[101].name.official);
    //         // console.log(responseCountryName.data[0].name);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // async function getCountryPop() {
    //     try {
    //         const responseCountryPop = await axios.get(worldLink);
    //         setCountryPop(responseCountryPop.data[101].population);
    //         // console.log(responseCountryPop.data[0].population);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // async function getCountryFlag() {
    //     try {
    //         const responseCountryFlag = await axios.get(worldLink);
    //         setCountryFlag(responseCountryFlag.data[101].flags.png);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // async function getCountryRegion() {
    //     try {
    //         const responseCountryRegion = await axios.get(worldLink);
    //         setCountryRegion(responseCountryRegion.data[101].region);
    //     } catch (e) {
    //         console.error(e);
    //     }

    // ///////////////////////////////////////////////////////////////////
    // function getCountryPop () {
    //     setCountryPop = country.data.population
    //     return setCountryPop
    // }


    const getCountry = () => {
        getWorld();
        // getCountryPop();
        // getCountryName();
        // getCountryFlag();
        // getCountryRegion();
        // region();
        // getCountryPop();
    }
    return (
        <>
            <header>
                <img src={worldMap} alt="coloured map of the world"/>
                <h1>World Regions</h1>
            </header>
            <main>

                {/*Door het in een functie te plaatsen met && laat ze de list zien als het een truthy is als idg een naam van een land bekent is. Door het met een truthy falsy te doen met een ? en : wissel je tussen het article en de button*/}
                { country ?
                <ul>
                    {country.map((dataCountries) => {
                        return <li>
                            <article>
                                {/*<span>*/}
                                {/*    <img className="flag" src={countryFlag} alt="flag of {countryName}"/>*/}
                                {/*</span>*/}
                                {/*<span className={countryRegion}>  {countryName}</span>*/}
                                <p>Has a population of {countryPop} people</p>
                            </article>
                        </li>
                    })}
                    </ul> : <button onClick={getCountry} disabled={loading}>breng de landen</button>
                }
                {error && <h2> Er is iets misgegaan</h2>}

                {/*DEZE DOET HET WEL */}
                {/*{ countryPop ?*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <article>*/}
                {/*                <span>*/}
                {/*                    <img className="flag" src={countryFlag} alt="flag of ({countryName})"/>*/}
                {/*                </span>*/}
                {/*                <span className={countryRegion}>  {countryName}</span>*/}
                {/*                <p>Has a population of {countryPop} people</p>*/}
                {/*            </article>*/}
                {/*        </li>*/}
                {/*    </ul> : <button onClick={getCountry} disabled={loading}>breng de landen</button>*/}
                {/*}*/}
                {/*{error && <h2> Er is iets misgegaan</h2>}*/}
            </main>
        </>
    )
}

export default App
