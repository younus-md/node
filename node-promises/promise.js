var req = require('request'),
    //url = 'localhost:8082';
    getPromise = function (reqUrl) {
        console.log('reqUrl', reqUrl)
        var promise = new Promise(function (resolve, reject) {
            req.get(reqUrl, function (err, res, body) {
                if (err) {
                    reject(new Error('something wrong while making request' + err))
                } else if (res.status < 200 || res.status > 299) {
                    reject(new Error('server responded with status code' + res.statusCode))
                } else {
                    resolve(body)
                }

            })
        })
        return promise;
    };
getPromise('http://api.ipstack.com/check?access_key=29c54f1862a5037c9401301ac16ca512&format=1').then(function (data) {
    data = JSON.parse(data)
    console.log('response' + data)
}, function (err) {
    console.log('error' + err)
})