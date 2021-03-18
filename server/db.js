const Sequelize = require('sequelize');

// const db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: "postgres",
//     ssl: process.env.ENVIRONMENT === 'production'
// }); 

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnathorized: false
        }
    }
}); 


module.exports = db;

