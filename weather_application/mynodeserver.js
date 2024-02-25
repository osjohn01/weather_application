const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;
app.get('/:location', async function(request, response) {
    const varlocation = request.params.location;
    try {
        const options = {
            method: 'GET',
            url: `https://open-weather13.p.rapidapi.com/city/${varlocation}`,
            headers: {
                'X-RapidAPI-Key': 'bf5e9bdeb0mshd393abff3c88a2dp1c9ff9jsnb3e9b0598e0d',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        const apiResponse = await axios.request(options)
        const data = apiResponse.data
        const location = data.name
        console.log("Location is : ", location);
        console.log("TEMPERATURE --> " ,data.main.temp)
        response.send(`TEMPERATURE --> ${data.main.temp}`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        response.status(500).send('Error fetching weather data');
    }
});


let server = app.listen(port, function() {
    console.log(`Listening on URL http://localhost:${port}`);
});