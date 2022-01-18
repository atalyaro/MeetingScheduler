import React from 'react';
import { useState, useEffect } from 'react';

export default function Form({ companys }) {
    const [company_id, setcompany_id] = useState(0)
    const [date_meeting, setdate_meeting] = useState("")
    const [start_hour, setstart_hour] = useState("")
    const [finish_hour, setfinish_hour] = useState("")
    const [description, setdescription] = useState("")
    const [room, setroom] = useState("")

    const addmeeting = async () => {
        const res = await fetch("http://localhost:1000/meetings/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ company_id, date_meeting, start_hour, finish_hour, description, room })
        })
        const data = await res.json()
        console.log(data)
        if (!data.err) {
            console.log("meeting added")
        } else {
            console.log(data.err)
        }
    }

    return (
        <div className="form">
            <h1>ADD A MEETING</h1>
            <select className="input" value={company_id} onChange={(e) => setcompany_id(e.target.value)}>
                <option value="" selected>non chosen</option>
                {companys.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <input className="input" type="date" value={date_meeting} onChange={(e) => setdate_meeting(e.target.value)} />
            <input className="input" type="time" value={start_hour} onChange={(e) => setstart_hour(e.target.value)} placeholder="start hour" />
            <input className="input" type="time" value={finish_hour} onChange={(e) => setfinish_hour(e.target.value)} placeholder="finish hour" />
            <textarea className="input" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="description"></textarea>
            <input className="input" value={room} type="text" on onChange={(e) => setroom(e.target.value)} placeholder="room" />
            <button className="input" onClick={()=>{
                addmeeting()
                setcompany_id(0)
                setroom("")
                setdescription("")
                setdate_meeting("")
                setfinish_hour("")
                setstart_hour("")
            }}
                >ADD MEETING</button>
        </div>
    )
}
