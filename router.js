const express = require("express")

const router = express.Router()



router.get("/",(req,res)=>{
    res.render("home")
})

router.post("/data", async (req,res)=>{
    try{
        const data = await form_database.insertMany(req.body)
        res.send(data)
    }
    catch(e){
        res.send(e).status(404)
    }
})

router.get("/data", async (req,res)=>{
    try{
        const data = await form_database.find({})
        res.send(data).status(200)
    }
    catch(e){
        res.send('something went wrong').status(404)
    }
})

module.exports = router;