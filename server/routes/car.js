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
    console.log(gid);
    find('goodlist', {
        'gid': gid
    }, (results) => {
        // console.log(results);
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
router.get('/add', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let gid = req.query.gid
    let num = req.query.num
    let tel = req.query.tel
    find('car', {
        'tel': tel,
        'goodid': gid
    }, (result) => {
        if (result.length) {
            // 更新  updata（'表名'，｛条件｝，｛设置｝，fn（））
            // console.log(result[0].num);
            let oldnum = result[0].num * 1
            num = num * 1 + oldnum
            console.log(oldnum, num);
            update('car', {
                'tel': tel,
                'goodid': gid,
            }, {
                'num': num,
            }, (result) => {
                res.send(result.result)
            })

        } else {
            // 插入
            insert('car', [{
                'goodid': gid,
                'tel': tel,
                'num': num * 1
            }], (result) => {

                res.send(result.result)
                // res.send(status)
            })
        }
        // console.log(result);
    })

   
});

module.exports = router;