var request = require('request');
var geocoder = require('geocoder');

/*request('https://api.themoviedb.org/3/search/movie?api_key=0ff882446ecc7061a134cf692047205b&query=batman', function (error, response, body) {
    if(!error && response.statusCode === 200){

        console.log('the movie s rating is:'+ JSON.parse(body));
    }
});*/

geocoder.geocode("San Francisco, CA", function ( err, data ) {
    // do something with data
    console.log(data);
});

var user_input = process.argv[2];

geocoder.geocode(user_input, function (err, data) {
console.log(JSON.stringify(data, null, 2));
});