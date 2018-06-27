var express = require('express'),
    // parser = require('body-parser'),
    helper = require('./helper'),
    find_update = false,
    app = express(),
    router = express.Router();
// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));
global.users = [];

router.get('/get/:id', function (req, res) {
    res.send("Hii,Welcome To Users" + req.params.id)
});

router.post('/createsUser', function (req, res) {
    console.log('hi')
    console.log('req' + req.body)
    var myObj = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        designation: req.body.dept
    }

    if (helper.validateUser(users, myObj)) {
        users.push(myObj)
        res.send(myObj)
    } else {
        res.send('Sorry,User with id:' + myObj.id + 'already exists')
    }

});

router.get('/getAllUsers', function (req, res) {
    console.log("Number of Users in array" + users.length)
    users = users.sort(function (a, b) {
        return a.id - b.id
    })
    res.send(users)
});
router.get('/getUserById/:id', function (req, res) {
    console.log("Inside get a single" + req.params.id)
    var getObj = validator.findUserByKey(users, 'id', req.params.id, find_update)
    if (getObj != null) {
        res.send(getObj)
    } else {
        res.send('Sorry, There is no User with id' + req.params.id)
    }
});
router.put('/updateUserById/:id', function (req, res) {
    find_update = true;
    console.log("inside update " + req.params.id + "value :" + find_update)
    var updateObj = validator.findUserByKey(users, 'id', req.params.id, find_update)
    if (updateObj != null) {
        res.send(updateObj)
    } else {
        res.send('Sorry, There is no User with id' + req.params.id)
    }
});
router.delete('/deleteUserById/:id', function (req, res) {
    console.log("inside delete" + req.params.id + 'value' + find_update)
    var obj = {
        id: req.params.id
    }
    if (!validator.validateUser(users, obj)) {
        validator.deleteUser(users, req.params.id)
        res.send(users)
    } else {
        res.send('Sorry, There is no User with id' + obj.id)
    }
});

module.exports = router