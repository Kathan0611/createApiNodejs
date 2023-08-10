import mysql from 'mysql'
export const conn = mysql.createConnection(
    {
        host:'localhost',
        database:'candidate',
        user:'root',
        password:'',
    }
)