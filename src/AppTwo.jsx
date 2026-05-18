import './AppTwo.css';
import React, {useState} from "react";
import axios from "axios";
const worldSearch = 'https://restcountries.com/v3.1/all?fields=name';

// import worldTurn from "./assets/world_map.png"
//
// const [country, setCountry] = useState("");
// const [error, toggleError] = useState(false)
// const [loading, toggleLoading] = useState(false)

const [searchCountries, setSearchCountries] = useState ("");
const [error, toggleError] = useState (false);
const [loading, toggleLoading] = useState (false)

function AppTwo() {

    async function takeWorld() {
        toggleError(false)
        toggleLoading(true)
        try {
            const responseSearch = await axios.get(worldSearch.data.name);
            setSearchCountries(responseSearch);
            console.log(responseSearch);
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false)
        }
    }


    return (
        <>
            <header>
                <h1> Search country information </h1>
            </header>
            <main>
                <button onClick={takeWorld} disabled={loading}>zoek een land</button>
                <p>{country}</p>
            </main>
            <footer>

            </footer>
        </>
    )

}

export default AppTwo
