//./helper

import axios from "axios";
// import {useState} from "react";
// const [countryRegion, setCountryRegion] = useState("");
// function region(tomato) {
//     const colorRegion = tomato.region
//     return colorRegion
// }
async function region(tomato) {
    try {
        const responseCountryRegion = await axios.get(tomato);
        setCountryRegion(responseCountryRegion.data[0].region);
    } catch (e) {
        console.error(e);
    }
}

export default region