var express = require('express');
var router = express.Router();
const {
    find,
    insert,
    del,
    update
} = require('../libs/why/mongodb');
/* GET users listing. */
router.get('/car', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let tel = req.query.tel
    find('car', {
        'tel': tel
    }, (results) => {
        // console.log(results.length);
        res.send(results);
    });
});
router.get('/carlist', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let gid = req.query.gid
    find('goodlist', {
        'gid': gid
    }, (results) => {
        // console.log(results.length);
        res.send(results);
    });
});
router.get('/del', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let gid = req.query.gid
    del('car', {
        'goodid': gid
    }, (results) => {
        // console.log(results.length);
        res.send(results);
    });
});
router.get('/update', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let gid = req.query.gid
    let num = req.query.num
    let tel = req.query.tel
    update('car', {
        'tel': tel,
        'goodid': gid
    }, {
        'num': num * 1,
    }, (result) => {
        console.log(result.result.ok);
    })

});


module.exports = router;