const Express = require('express');
const app = Express();


const controllers = require('./controllers');

app.use('/user', controllers.usercontroller);
app.use('/review', controllers.reviewcontroller);


app.listen(3001, () => {
    console.log(`[Server]: App is listening on 3001.`);
});

//first push and merge to develop
//rambo push to develop
