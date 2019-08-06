var express = require('express');
var router = express.Router();
var app    = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

const {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    del
} = require("../mongodb/db");

var {
    createToken,
    decodeToken,
    checkToken
} = require('../mongodb/token');

/* 验证手机号是否正确 */
router.get('/tel', function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*')
    let tel = req.query.tel
    console.log(tel);
   
    (async()=>{
        
        let data = await find("username",{tel})
        console.log(data);
        // console.log(123);
        if(data.length){
            res.send("yes")
        }else{
            res.send("no")
        }
    })()
    // res.send("456") 
    // next() 
});


// 验证密码是否正确

router.post('/pwd',function(req,res,next){

    // res.header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie,token');
    
    // 解决跨域的问题
    res.append('Access-Control-Allow-Origin', '*')
    // console.log(req);
    let {pwd,tel}=req.body
    console.log(pwd,tel);
    (async()=>{
        let data = await find ("username",{pwd,tel})
        console.log(data);
        // res.send(data)
        if(data.length){
            let token = createToken({
                pwd
            }, 300)
            res.send({
                status: 'success',
                token
            })
          
        }else{
            res.send("no")
        }
    })();
    
})




module.exports = router;
