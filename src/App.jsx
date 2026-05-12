import './App.css';
import React, {setState} from "react";
import axios from "axios";


function App() {
    // const [world, setWorld] = setState ()
    const worldLink ='https://restcountries.com/v3.1/all?fields=name,flags,population,region';
    // const worldLink ='https://restcountries.com/v3.1/all?fields=name';


    async function getWorld () {
        try {
            const responseWorld = await axios.get(worldLink);
            console.log(responseWorld.data[0].name);
        } catch (e) {
            console.error(e);
        }


    }

    return (
        <>
           <h1>Maak je applicatie hier!</h1>
            <button onClick={getWorld}>breng de wereld</button>
            <p>resultaat</p>
        </>
    )
}

export default App
