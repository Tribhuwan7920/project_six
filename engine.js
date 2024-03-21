const express = require("express")
const {form_database } = require("./database")
const router = require("./router")
const path = require("path")
const hbs = require("hbs")

const app = express()
app.use(express.json())
app.use(router)
app.use(express.static(path.join(__dirname,"/publics")))
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")

hbs.registerPartials(path.join(__dirname,"/views/partials"))

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
