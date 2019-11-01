const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLon(argv.direccion)
//.then(console.log);

// clima.getClima(8.400000, -71.129997)
//     .then(console.log)
//     .catch(console.log);

const ubicacion = argv.direccion;

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLon(dir);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp} grados C`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }


};

getInfo(ubicacion)
    .then(console.log)
    .catch(console.log);