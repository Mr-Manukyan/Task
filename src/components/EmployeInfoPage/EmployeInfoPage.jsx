import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './EmployeInfoPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeesPageIsLoading, getOneEmploye } from '../../redux/Selectors/Employees-Selector'
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
                <div className={style.employeName}><span>{'Name : '}</span>{employe.name}</div>
                <div className={style.employeSurname}><span>{'Surname : '}</span>{employe.surname}</div>
                <div className={style.employeEmail}><span>{'Email : '}</span>{employe.email}</div>
                <div className={style.employePosition}><span>{'Position : '}</span>{employe.position}</div>
            </div>
        </div>
    )
}

