import React from 'react'

export default function Card({meeting}) {
    const date= new Date(meeting.date_meeting)
    return (
        <div className="card">
            <h2>name of company:{meeting.name}</h2>
            <h2>description of meeting:{meeting.description}</h2>
            <h2>room:{meeting.room}</h2>
            <h2>date:{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h2>
            <h2>hour of start:{meeting.start_hour}</h2>
            <h2>hour of finish:{meeting.finish_hour}</h2>
        </div>
    )
}
