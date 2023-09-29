const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const setupAndStartServer =  () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server Started At Port ${PORT}`);
    });

}

setupAndStartServer();