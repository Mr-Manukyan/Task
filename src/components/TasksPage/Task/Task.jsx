import React from 'react'
import style from './Task.module.css'

export const Task = (task, removeOneTasks, updateTaskData) => {

    return (
        <div className={style.container}>
            <div className={style.name}><span>{'Name : '}</span>{task.name}</div>
            <div className={style.description}><span>{'Description : '}</span>{task.description}</div>
            <div className={style.endDate}><span>{'Start Date : '}</span>{task.startDate}</div>
            <div className={style.endDate}><span>{'End Date : '}</span>{task.endDate}</div>
            <div className={style.employeeId}><span>{'EmployeeId : '}</span>{task.employeeId}</div>
        </div>
    )
}
