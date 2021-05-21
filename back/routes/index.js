var express = require('express');
var router = express.Router();

const {ContactModel} = require('../db/db')

/* GET home page. */
router.post('/',function(req,res){

  ContactModel.find(function(err,doc){
    res.send(doc)
    console.log(doc)
  })
})



router.post('/add',function (req,res) { 
  let {id,first,last,email,phone} = req.body
  console.log(req.body)

  ContactModel.findOne({first,last},function (err,doc) { 
    if(doc){
      res.send('conflict')
    }
    else if(err){
      console.log(err)
    }
    else{
      ContactModel.create({
        id:id,
        first:first,
        last:last,
        email:email,
        phone:phone
      },function(err,data){
        if(data){
          res.send('success')
        }else{
          res.send('fail')
        }
      })
    }
   })
 })

 router.post('/update',function(req,res){
  let {id,first,last,email,phone} = req.body

  ContactModel.find(function(err,doc){
    if(err){
      res.send('err')
    }
    else{
      res.send(doc)
      ContactModel.updateMany({id,first,last,email,phone},function(err,docs){
       
      })
  

    }
      
    
  })
    
 })

 router.post('/delete',function(req,res){
  let {id,first,last,email,phone} = req.body
   ContactModel.remove({phone:phone},function(err){
    if (err) {
      console.error(error);
    } else {
      console.error("success")
    }
   })
 })







module.exports = router;
