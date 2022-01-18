import React from 'react';
import { useState, useEffect } from 'react';
import Card from "./Card"

export default function List({companys}) {
const [meetings, setmeetings] = useState([])
const [name, setname] = useState("")

const showmeetings= async () => {
        const res= await fetch("http://localhost:1000/meetings/byname",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name})
        })
        const data= await res.json()
        if(!data.err){
            setmeetings(data)
        }else{
            console.log(data.err)
        }
}

    return (
        <div>
            <h1>SHOW MY MEETINGS</h1>
          <select value={name} onChange={(e)=>setname(e.target.value)}>
                <option value="" selected>non chosen</option>
                {companys.map(c=> <option key={c.id} value={c.name}>{c.name}</option>)}
          </select> 
          <button onClick={showmeetings}>SHOW</button>
          {meetings.map(m=><Card key={m.id} meeting={m}/>)}
        </div>
    )
}
