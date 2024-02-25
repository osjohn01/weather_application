const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;
//My name is obedjohn
app.get('/temperature/:location_code', async function(request, response) {
    const varlocation = request.params.location_code;
    try {
        const options = {
            method: 'GET',
            url: 'https://open-weather13.p.rapidapi.com/city/landon',
            headers: {
                'X-RapidAPI-Key': 'bf5e9bdeb0mshd393abff3c88a2dp1c9ff9jsnb3e9b0598e0d',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        const apiResponse = await axios.request(options);
        const data = apiResponse.data
        console.log(data);
        response.send(data.coord);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        response.status(500).send('Error fetching weather data');
    }
});

let server = app.listen(port, function() {
    console.log(`Listening on URL http://localhost:${port}`);
});
