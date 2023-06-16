import React, { useState } from 'react'
import './Calendar.css'
import Calendar from 'react-calendar'


export const MyCalendar = React.memo(({ setIsShowCalendar, setNewDate, todoDate }) => {

    const [date, setValue] = useState(todoDate)

    const onChangeDate = (date) => {
        setNewDate(date)
        setIsShowCalendar(false)
    }

    return (
        <Calendar onChange={onChangeDate}
            value={date}
            minDate={new Date()}
            locale="en"
        />
    )
})








