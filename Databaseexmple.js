var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
});

connection.connect();

connection.query('SELECT version()', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
});

connection.end();