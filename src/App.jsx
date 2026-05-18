import './App.css';
import React, {useState} from "react";
import axios from "axios";
import worldMap from "./assets/world_map.png";
import spinningWorld from "./assets/spinning-globe.gif";
import formatPopulation from './helper/formatPopulation.js';
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

    // const worldSearch = 'https://restcountries.com/v3.1/name/{name}?fullText=true';

    async function getWorld() {
        toggleError(false)
        toggleLoading(true)
        try {
            const responseWorld = await axios.get(worldLink);
            setCountry(responseWorld.data);

            responseWorld.data.sort((a, b) => {
                return a.population - b.population;
            });
            // const setCountryPop = country.data;
            // setCountryPop(country.population);
            // setCountryFlag(country.flags.png);
            // setCountryName(country.name.official);
            // setCountryRegion(country.region);
            // console.log(responseWorld.data);
            console.log(responseWorld.data)
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false)
        }
    }

    function getCountryPop() {
        const setCountryPop = country.population
        return setCountryPop
    }

    //---------------Opdracht 2 --------------//



    const [searchCountries, setSearchCountries] = useState("");
    const [countries, setCountries] = useState([]);

    const [countryInfo, setCountryInfo] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [errorTwo, toggleErrorTwo] = useState(false);
    const [loadingTwo, toggleLoadingTwo] = useState(false)

    async function searchWorld() {
        event.preventDefault();
        toggleErrorTwo(false);

        try {
            const responseSearch = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`);
            setSearchCountries(responseSearch.data[0]);
            // setCountryInfo(responseSearch.data[0])
            console.log(responseSearch);

        } catch (e) {
            toggleErrorTwo(true)
            console.error(e);
        } finally {
            toggleLoadingTwo(false)
        }
        console.log(searchCountries)
    }

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
                <section>
                    {country ?
                        <ul>
                            {/*{const outcome = country.map((countrySingle) => {*/}
                            {country.map((countrySingle) => {
                                return (
                                    <li key={countrySingle.name.common}>
                                        <article>
                                <span>
                                    <img className="flag" src={countrySingle.flags.svg}
                                         alt={`flag of ${countrySingle.name.common}`}/>
                                </span>
                                            <span
                                                className={countrySingle.region}>  {countrySingle.name.official}</span>
                                            <p>Has a population of {countrySingle.population} people</p>
                                        </article>
                                    </li>
                                )
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
                </section>
                <section className="search">
                    <h1> Search country information </h1>
                    <img src={spinningWorld} alt="turning globe" className="globe"/>

                    <form className="searchForm" onSubmit={searchWorld}>
                        <input
                            type="text"
                            name="searchField"
                            id="searchField"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="bijvoorbeeld Peru"
                        />
                        <button type="submit">Zoek land</button>
                        {errorTwo && <span id="error-message">{errorTwo}</span>}
                    </form>


                    {Object.keys(searchCountries).length > 0 &&
                        <article className="search-result-box">
                            <span className="flag-title-container">
                              <img src={searchCountries.flags.svg} alt="vlag" className="flag"/>
                              <h2>{searchCountries.name.common}</h2>
                            </span>
                            <p>{searchCountries.name.common} is situated in {searchCountries.subregion} and the capital
                                is {searchCountries.capital[0]}</p>
                            <p>It has a population of {formatPopulation(searchCountries.population)} people and it borders
                                with {searchCountries.borders.length} neighboring countries</p>
                            <p>Websites can be found on <code>{searchCountries.tld[0]}</code> domain's</p>
                        </article>
                    }
                    {/*<p>{searchCountries}</p>*/}

                </section>

            </main>
        </>
    )
}

export default App
