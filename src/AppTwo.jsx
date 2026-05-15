import './AppTwo.css';
import React, {useState} from "react";
import axios from "axios";
const worldLink = 'https://restcountries.com/v3.1/all?fields=name';

// import worldTurn from "./assets/world_map.png"
//
// const [country, setCountry] = useState("");
// const [error, toggleError] = useState(false)
// const [loading, toggleLoading] = useState(false)




function AppTwo() {

    // async function takeWorld() {
    //     toggleError(false)
    //     toggleLoading(true)
    //     try {
    //         const responseCountry = await axios.get(countryData);
    //         setCountry(responseWorld.data);
    //         console.log(responseCountry.data)
    //     } catch (e) {
    //         toggleError(true)
    //         console.error(e);
    //     } finally {
    //         toggleLoading(false)
    //     }
    // }
    // const getNederland =() => {
    //     takeWorld();
    // }

    return (
        <>
            <header>
                <h1> Search country information </h1>
            </header>
            <main>
                {/*<button onClick={getNederland} disabled={loading}>breng nederland</button>*/}
                {/*<p>{country}</p>*/}
            </main>
            <footer>

            </footer>
        </>
    )

}

export default AppTwo
