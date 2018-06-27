var express = require("express"),
    bodyParser = require("body-parser"),
    comp = require('./company'),
    users = require('./user'),
    parser = require('body-parser'),
    app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/company', comp);
app.use('/user', users)

app.listen(8002)


