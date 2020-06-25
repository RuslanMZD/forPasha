const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/pasha-db" ,{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api", require("./routes"));



app.listen(4000,()=>{
    console.log('SERVER UP listen 4000 PORT')

})




