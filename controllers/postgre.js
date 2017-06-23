/**
 * Created by frosales on 23/06/2017.
 */

const pg = require('pg');
const connectionString = 'postgres://postgres:123@localhost:5432/db_postgres';
const client = new pg.Client(connectionString);
client.connect();

//console.log('SELECT * FROM USERS');

//client.query('INSERT INTO USERS (id, name) VALUES (1, \'HOLA MUNDO\')');

const query = client.query('SELECT * FROM USERS');

query.on('row', function(row) {
    console.log(row);
});