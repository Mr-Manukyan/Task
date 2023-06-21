import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './EmployeInfoPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmployeTasks, getEmployeesPageIsLoading, getOneEmploye } from '../../redux/Selectors/Employees-Selector'
import backIcon from '../../assets/icons/arrow1.png'
import { Loading } from '../Common/Loading/Loading'
import { getOneEmployeInfo } from '../../redux/Reducers/Employees-Reducer'


export const EmployeInfoPage = () => {

    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(getOneEmployeInfo(params.id))
    }, [])

    const navigate = useNavigate()
    const isLoading = useSelector(getEmployeesPageIsLoading)
    const employe = useSelector(getOneEmploye)
    const employeAllTasks = useSelector(getAllEmployeTasks)

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
                <h3 className={style.paragraph}>Employ Info Data</h3>
                <div className={style.employeInfoWrapper}>

                    <div className={style.employeInfoContainer}>
                        <h3 className={style.employeInfoParagraph}>Employe Info</h3>
                        <div className={style.employeInfoBody}>
                            <div className={style.employeName}><span>{'Name : '}</span>{employe.name}</div>
                            <div className={style.employeSurname}><span>{'Surname : '}</span>{employe.surname}</div>
                            <div className={style.employeEmail}><span>{'Email : '}</span>{employe.email}</div>
                            <div className={style.employePosition}><span>{'Position : '}</span>{employe.position}</div>
                        </div>
                    </div>
                    <div className={style.employeTaskInfo}>
                        <h3 className={style.taskParagraph}>Task Info</h3>
                        {
                            employeAllTasks.length === 0 ? <p className={style.noTask}>Employee hasn't task</p> : null
                        }
                        {
                            employeAllTasks.map((task) => (
                                <div className={style.taskBody} key={task.id}>
                                    <div className={style.taskName}><span>{'Name : '}</span>{task.name}</div>
                                    <div className={style.taskDescription}><span>{'Description : '}</span>{task.description}</div>
                                    <div className={style.startDate}><span>{'StartDate : '}</span>{task.startDate}</div>
                                    <div className={style.endDate}><span>{'EndDate : '}</span>{task.endDate}</div>
                                    <div className={style.employeeId}><span>{'EmployeeId : '}</span>{task.employeeId}</div>
                                    <div className={style.taskId}><span>{'TaskID : '}</span>{task.id}</div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


