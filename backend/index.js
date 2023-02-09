const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(cors())
app.use (bodyparser.json())







//creating mysql
const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password: "",
    database : "userinfo",
    port : 3306


})

// check Database connection
db.connect(err =>{
    if (err){console.log("err")}
    console.log('Database connected')
}) 

//get all data

app.get('/users',(req,res)=>{
    // console.log("Get allusers")
    let qrr = "SELECT * from users"
    db.query(qrr,(err,results)=>{
        if(err){
            console.log(err,"errs")
        }
        if (results.length>0){
            res.send({
                message:"All user Data",
                data:results
            })
        }
    }
)})



//get single user by id

app.get('/user/:id',(req,res)=>{
    // console.log(req.params.id)
    let qrId = req.params.id
    let qr = `SELECT * from users where id = ${qrId}`
    db.query(qr,(err,results)=>{
        if (err){
            console.log(err)
        }
        try {if(results.length>0){
            res.send({
                message:"Get data by ID",
                data:results
            })
        }
    
        else{
            res.send({
                message:"Data not found"
            })
        }
    }
    catch{
        console.log(err)
    }
    })




})



//post data or insert data

app.post('/user',(req,res)=>{
    console.log(req.body,"post database sucess")
   let fullName = req.body.fullname
    let eMail = req.body.email
    let Mobile = req.body.mobile


    let qr = `insert into users(fullname,email,mobile)
    values('${fullName}','${eMail}','${Mobile}')`
    db.query(qr,(err,results)=>{
        if(err){console.log(err)
        
        }
       res.send({
        message:"Data send successful!",
        data:results
       })
    })


})

//update data

app.post('/user/:id',(req,res)=>{
    // console.log(req.body,"updated data")
    let uID = req.params.id;
    let fullName = req.body.fullname
    let eMail = req.body.email
    let Mobile = req.body.mobile
    let qr = `UPDATE users set fullname ='
     ${fullName}',email = '${eMail}',mobile='${Mobile}' where id = '${uID}'`
     db.query(qr,(err,results)=>{
        if (err){console.log(err)}
        res.send({
            message: "Data updated successful",
            data : results
        })
     })
})


//delet data
app.delete('/user/:id',(req,res)=>{
    let uID = req.params.id;
    let qr = `delete from users where id = '${uID}'`
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
        res.send({
            message:"Data delated sucessfull"
        })
    })

})

app.get('/user/name/:fullname',(req,res)=>{
    let fullName = req.params.fullname
    let qr = `SELECT * from users where fullname = '${fullName}'`
    
    db.query(qr,(err,results)=>{
        let fullName = "User not found"
        let eMail = "User not found"
        if (err){console.log(err)}
       if (results.length>0){
        res.send({
            message:"This is your data",
            data:results
        })
    }
    else{
        res.send({
            message:'data not found',
            data:[{
                'fullname':'Not found',
                'email':'Not found',
                'mobile':'Not found'
                
            }]
           
           


        })
    }


    })

})

app.put('/user/:id',(req,res)=>{
    let uID = req.params.id
    let fullName = req.body.fullname
    let eMail = req.body.email
    let Mobile = req.body.mobile
    let qr = `update users set fullname = '${fullName}',email='${eMail}',
    mobile=' ${Mobile}' where id =' ${uID}'`
    db.query(qr,(err,results)=>{
        if(err){console.log(err)
        }
        res.send({
            message:"data updated successfull",
            data:results
        })
    })
    
})






app.listen(3000,()=>{
    console.log("server is running in server 3000")
})


