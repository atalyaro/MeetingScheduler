const router= require("express").Router()
const {Query}= require("../dbcon")

router.post("/byname",async(req,res)=>{
    const {name}= req.body
    try{
        const q=`SELECT meetings.id,meetings.description,meetings.start_hour,
        meetings.finish_hour,meetings.date_meeting,meetings.room,companys.name
        FROM meetings INNER JOIN companys ON meetings.company_id=companys.id
        WHERE name = "${name}"`
        const meetings= await Query(q)
        res.json(meetings)
    }catch(error){
        res.status(500).json({err:true,error})
    }
})

router.post("/add",async(req,res)=>{
    const {description,start_hour,finish_hour,date_meeting,room,company_id}= req.body
    try{
        const q_new=`INSERT INTO meetings(description,start_hour,finish_hour,date_meeting,room,company_id)
        VALUES("${description}","${start_hour}","${finish_hour}",DATE '${date_meeting}',"${room}",${company_id})`
        await Query(q_new)
        const q=`SELECT meetings.id,meetings.description,meetings.start_hour,
        meetings.finish_hour,meetings.date_meeting,meetings.room,companys.name
        FROM meetings INNER JOIN companys ON meetings.company_id=companys.id`
        const meetings= await Query(q)
        res.json(meetings)
    }catch(error){
        res.status(500).json({err:true,error})
    }
})

// BONUS (DIDN'T FINISH =[ )

// router.post("/timeofmeeting",async(req,res)=>{
//     const {id}= req.body
//     try{
//         const q_newc=`ALTER TABLE meetings
//         ADD time_of_meeting varchar(255)`
//         await Query(q_newc)
//         const getstart=`SELECT start_hour FROM meetings
//         WHERE id= ${id}`
//         const getfinish=`SELECT finish_hour FROM meetings
//         WHERE id= ${id}`
//         const a=getstart.start_hour.split(":")
//         const b= getfinish.finish_hour.split(":")
//         const time_of_meeting=`${b[0]-a[0]}:${b[1]-a[1]}:${b[2]-a[2]}`
//         const q_update=`UPDATE meetings
//         SET time_of_metting = ${time_of_meeting}, 
//         WHERE id = ${id}`
//         await Query(q_update)
//         res.sendStatus(200)
//     }catch(error){
//         res.status(500).json({err:true,error})
//     }
// })

module.exports = router