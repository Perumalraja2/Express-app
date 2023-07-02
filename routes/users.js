const express = require('express')
const router = express.Router()

const users = [
{
    name:"peru",
    email:"peru@gmail.com",
    password:"admin@123",
    role:"student"
},
{
    name:"naru",
    email:"naru@gmail.com",
    password:"admin@123",
    role:"student"
},
{
    name:"pattu",
    email:"pattu@gmail.com",
    password:"admin@123",
    role:"student"
},
{
    name:"lattu",
    email:"lattu@gmail.com",
    password:"admin@123",
    role:"student"
}


]

router.get('/',(req,res)=>{
res.status(200).send({

message:"Data fetched successfully",
data:users

})


})

router.get('/:id',(req,res)=>{
if(Number(req.params.id)<users.length){
res.status(200).send({
Message:"user fecth successfully",
data:users[req.params.id]
})

}else{
    res.status(400).send({
        Message:"user not found"
    })
}



})

router.post('/',(req,res)=>{
  
users.push(req.body)
res.status(200).send({

    message:"user added succesfully"
    
})
console.log(users)
})

router.put('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1,req.body)
    res.status(200).send({
    Message:"user fecth successfully",
    data:users[req.params.id]
    })
    
    }else{
        res.status(400).send({
            Message:"user not found"
        })
    }
    
    
    
    })

    
router.delete('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1)
    res.status(200).send({
    Message:"user fecth successfully",
    data:users[req.params.id]
    })
    
    }else{
        res.status(400).send({
            Message:"user not found"
        })
    }
    
    
    
    })








module.exports=router