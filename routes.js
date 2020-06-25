const express = require ('express');
const router = express.Router();
const Klient = require('./model');



router.get('/client',(req,res)=>{
Klient.find({}).then(response=>{
    res.send(response);
});

});


// router.post('/client',(req,res)=>{
//     Klient.create(req.body).then(response=>{
//         res.send(response);
//     });
// });

router.post('/client',(req,res)=>{
 
    // Klient.insertOne({name:req.body.name,telegram:req.body.telegram,depozit:req.body.depozit}, (err, result) => {
    //     if (err) {
    //         console.log('Unable insert user: ', err)
    //         throw err
    //       }
const user = new Klient({
    name:req.body.name,
    telegram:req.body.telegram,
    depozit:req.body.depozit
})

user.save();
res.send("OKAAAAA")

console.log(req.body)
          res.send("OKKFFFFQ");

    })





    





module.exports =router;