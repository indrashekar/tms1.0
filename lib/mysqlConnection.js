const mysql = require('mysql2');

var config =
{
    host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
    password: 'int123$%^',
    database: 'db_tmp',
    port: 3306,
    ssl: true
};
const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
    console.log("Connection established.");
    }   
});

module.exports = conn;