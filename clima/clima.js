const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f79afd05f7322481ac4c04a0ed9c8a85&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}