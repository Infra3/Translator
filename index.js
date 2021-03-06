
'use strict';
const translate = require('google-translate-api');
const express = require('express');
const bodyParser = require('body-parser');


const restService = express();



restService.use(
    bodyParser.urlencoded({
        extended: true
    })
);

restService.use(bodyParser.json());

restService.post('/weatherinfo', (req, res) => {
    // Get the city and date from the request
    let city = req.body.result.parameters['city']; // city is a required param
    // Get the date for the weather forecast (if present)
   
    // Call the weather API
   translate('hello', {from: 'en', to: 'nl'}).then(res => {
 
	
	  res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'speech': res.text, 'displayText': res.text}));
     
}).catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
}); 


});


restService.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: ' + (process.env.PORT || 8000));
});
