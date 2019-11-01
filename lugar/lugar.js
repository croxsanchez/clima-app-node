const axios = require('axios');

const getLugarLatLon = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '25d6037109msh4ea53f3373c4ee4p138560jsnb777444f08a3' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getLugarLatLon
}