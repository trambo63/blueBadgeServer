const Express = require('express');
const app = Express();

app.listen(3001, () => {
    console.log(`[Server]: App is listening on 3001.`);
});