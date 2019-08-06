var express = require('express');
var router = express.Router();
const {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    del
  } = require("../mongodb/db");
  

/* 验证手机号 */
router.get('/tel', function(req, res, next) {
    
    res.append('Access-Control-Allow-Origin', '*')

   
    let tel = req.query.tel
    console.log(tel);

    (async()=>{
        if(tel){
            let data = await find("username",{tel})
            console.log(data);
            if(data.length){
                res.send("yes")
            }else{
                res.send("no")
            }
        }

    })()

   
});


// 验证用户名
router.get('/name', function(req, res, next) {
    
    res.append('Access-Control-Allow-Origin', '*')

    let name = req.query.name
  console.log(name);

    (async()=>{
        if(name){
            let data = await find("username",{name})
            console.log(data);
            if(data.length){
                res.send("yes")
            }else{
                res.send("no")
            }
        }
    })()

   
});

router.post('/add',function(req,res,next){
    res.append('Access-Control-Allow-Origin', '*')

    let {
        tel,pwd,name
    }=req.body
console.log(tel,pwd,name);
    (async()=>{
     

       if(tel && pwd &&name){
        let data =  await add("username",{tel,pwd,name})
        console.log(data);
        res.send('yes')
       }else{
        res.send('no')
       }
       

    })()



})




module.exports = router;
