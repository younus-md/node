var express = require('express'),
    parser = require('body-parser'),
    router = express.Router(),
    helper = require('./helper'),
    find_update = false,
    app = express();

// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));


global.comp = [];

router.all('/api/*', function (req, res, next) {
    console.log('Hello')
    var myObj = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        designation: req.body.dept
    }

    console.log('type' + req.method)
    if (req.method == 'POST') {
        if (helper.validateUser(users, myObj)) {
            comp.push(myObj)
            res.send(myObj)
            // next()
        } else {
            res.send('Sorry,User with id:' + myObj.id + 'already exists')
        }
    } else if (req.method == 'GET' || req.method == 'PUT') {
        if (req.method == 'PUT') {

        }
        var getObj = validator.findUserByKey(users, 'id', req.params.id, find_update)
        if (getObj != null && find_update == flase) {
gfdgfsdgdfgdfgdfgdfggdfgdfgdgdghh        } else if (getObj != null && find_update == true) {
            res.send('Sorry, There is no User with id' + req.params.id)
        }


    }



    // comp = comp.sort(function (a, b) {
    //     console.log('inside sort')
    //     return a.id - b.id
    // })
    // res.send(comp)
    // next()
})

// router.get('/', function (req, res) {
//     res.send("Hii,Welcome To Company")

// })








module.exports = router;