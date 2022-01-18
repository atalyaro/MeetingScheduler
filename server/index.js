const express= require("express")
const app= express()
const cors= require("cors")
require ("./dbcon")

app.use(cors())
app.use(express.json())
app.use("/companys",require("./routes/companys"))
app.use("/meetings",require("./routes/meetings"))

app.listen(1000,()=>console.log("server 1000"))