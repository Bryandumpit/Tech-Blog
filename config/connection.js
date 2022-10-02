//Import Sequelize constructor from sequelize lib
const Sequelize = require('sequelize');
//Import dotenv to allow for env variables
require('dotenv').config();

let sequelize;

//If Heroku sets up port, use JAWSDB_URL, else use process.env variables
if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize (
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}

module.exports=sequelize;