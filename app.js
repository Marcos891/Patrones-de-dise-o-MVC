const express = require('express');
const port = 3000;
const app = express();
const mainRouter = require('./routers/main')


/* recursos estaticos */

app.use(express.static('public'));

/* rutas */

app.use('/', mainRouter)


app.listen(port, () => console.log('server runing in localhost://' + port));