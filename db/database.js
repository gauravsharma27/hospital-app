const {Pool} = require('pg')
const pool =new Pool({
    host:'localhost',
    user:'node_user',
    password:'asdfg12345',
    port:5432,
    database:'postgres'
})
module.exports = pool