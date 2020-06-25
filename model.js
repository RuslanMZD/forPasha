const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const KlientSchema = new Schema({

    
        name:String,
        telegram: String,
        depozit:Number

        


    






});





const Klient =mongoose.model("klient", KlientSchema);




module.exports = Klient;
