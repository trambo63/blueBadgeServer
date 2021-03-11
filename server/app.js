require('dotenv').config();

const express = require('express');
const dbConnection = require('./db')
// const middleware = require('./middleware')
const app = express();


// app.use(middleware.CORS);
// app.use(express.json());

// const controllers = require('./controllers');

// app.use('/review', controllers.reviewcontroller)
// app.use('/user', controllers.usercontroller)

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`[Server]: App is listening on 3001.`);
        }); 
    })
    .catch((err) => {
        console.log('[Server]: Server Crashed');
        console.log(err);
    })


