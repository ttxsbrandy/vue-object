var express = require('express');
var router = express.Router();

const {
    connect,
    find,
    // 根据id查找
    ObjectId} = require('../mongoX/db')


/* GET users listing. */
router.get('/goodlist', async function(req, res, next) {

    res.append('Access-Control-Allow-Origin', '*')

    let data = await find('jp',{})

    res.send(data)

 

});

module.exports = router;