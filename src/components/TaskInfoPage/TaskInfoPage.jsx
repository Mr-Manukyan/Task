import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './TaskInfoPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import backIcon from '../../assets/icons/arrow1.png'
import { Loading } from '../Common/Loading/Loading'
import { getOneTask, getTasksPageIsLoading } from '../../redux/Selectors/Tasks-Selector'
import { getOneTaskInfo } from '../../redux/Reducers/Tasks-Reducer'



export const TaskInfoPage = () => {

    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(getOneTaskInfo(params.id))
    }, [])

    const navigate = useNavigate()
    const isLoading = useSelector(getTasksPageIsLoading)
    const task = useSelector(getOneTask)


    const goToBack = () => {
        navigate(-1)
    }


    return (
        <div className={style.container}>
            {isLoading && <Loading />}
            <div className={style.body}>
                <img src={backIcon}
                    alt='backIcon'
                    className={style.backIcon}
                    onClick={goToBack}
                />

                <div className={style.taskInfoWrapper}>
                    <h2 className={style.taskParagraph}>Task Info Data</h2>
                    <div className={style.taskBody}>
                        <div className={style.infoBody}>
                            <div className={style.taskName}><span>{'Name : '}</span>{task.name}</div>
                            <div className={style.taskDescription}><span>{'Description : '}</span>{task.description}</div>
                            <div className={style.startDate}><span>{'StartDate : '}</span>{task.startDate}</div>
                            <div className={style.endDate}><span>{'EndDate : '}</span>{task.endDate}</div>
                            <div className={style.employeeId}><span>{'EmployeeId : '}</span>{task.employeeId}</div>
                            <div className={style.taskId}><span>{'TaskID : '}</span>{task.id}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


