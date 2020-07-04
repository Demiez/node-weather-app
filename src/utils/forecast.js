const request = require('postman-request');

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9e8566bd93f9362ed2bdb3d5817a6ae5&query=${lat},${lon}&units=m`;


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees in shadow");
        }
    });
}


module.exports = forecast;