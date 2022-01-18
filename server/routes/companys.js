const router= require("express").Router()
const {Query}= require("../dbcon")

router.get("/",async(req,res)=>{
    try{
        const companys= await Query(`SELECT * FROM companys`)
        res.json(companys)
    }catch(error){
        res.status(500).json({err:true,error})
    }
})

module.exports = router