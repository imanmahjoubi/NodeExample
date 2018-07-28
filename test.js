var fs = require('fs');

fs.readFile('best-things-ever.txt', 'utf8', function (err, data) {


    if(err){
        console.log(err);
    }


    var arrayF = data.split(",");

    console.log(arrayF);

    for (var i = 0; i< arrayF.length ; i++){
        console.log(arrayF[i]);
    }

});