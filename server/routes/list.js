var express = require('express');
var router = express.Router();

const {
    connect,
    find,
    // 根据id查找
    ObjectId} = require('../mongoX/db')

router.get('/goodlist', async function(req, res, next) {

    res.append('Access-Control-Allow-Origin', '*')

    let data = await find('goodlist',{})

    res.send(data)

});

router.get('/gooddata', async function(req, res, next) {

    res.append('Access-Control-Allow-Origin', '*')

    let goodid = req.query.goodid;
    console.log(goodid);
    let data = await find('goodlist',{
        gid:goodid
    })
    console.log(data);
    res.send(data)

});

module.exports = router;