const mongoose = require("mongoose")

async function database_connect(){
    const data = await  mongoose.connect("mongodb://localhost:27017/portfillo")
}

database_connect().then(data=>console.log("connection successful"))


const schema = new mongoose.Schema({
    name :String
    // age:Number,
    // concern:String
})

const model = new mongoose.model("data_form",schema)

module.exports.form_database = model

