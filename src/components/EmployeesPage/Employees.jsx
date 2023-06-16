import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {
    createOneNewEmploye,
    deleteOneEmploye, employeesActions, getEmployees,
    onEmployeesPageChanged, updateOneEmploeData
} from '../../redux/Reducers/Employees-Reducer'
import {
    getAllEmployees, getEmloyeesCurrentPage, getEmloyeesPageSize,
    getEmloyeesPortionNumber, getEmployeesPageIsLoading, getTotalEmloyeesCount
}
    from '../../redux/Selectors/Employees-Selector'
import { Pagination } from '../Common/Pagination/Pagination'
import { Loading } from '../Common/Loading/Loading'
import { Employe } from './Employe/Employe'
import { Modal } from '../Common/Modal/Modal'
import style from './Employees.module.css'
import { CreateEmployeForm } from '../Common/CreateEmployeForm/CreateEmployeForm'
import createEmployeIcon from '../../assets/icons/createUser.png'




export const Employees = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployees(currentPage, pageSize))
    }, [])

    const [isShowCreateEmployeModalForm, setIsShowCreateEmployeModalForm] = useState(false)

    const employees = useSelector(getAllEmployees)
    const pageSize = useSelector(getEmloyeesPageSize)
    const portionNumber = useSelector(getEmloyeesPortionNumber)
    const currentPage = useSelector(getEmloyeesCurrentPage)
    const totalEmployeesCount = useSelector(getTotalEmloyeesCount)
    const isLoading = useSelector(getEmployeesPageIsLoading)


    const removeOneEmploye = (userID) => {
        dispatch(deleteOneEmploye(userID, currentPage, pageSize))
    }

    const updateEmployeData = (id, updatedEmployeData) => {
        dispatch(updateOneEmploeData(id, updatedEmployeData, currentPage, pageSize))
    }

    const onPageChanged = (p) => {
        dispatch(onEmployeesPageChanged(p, pageSize))
    }

    const setPortionNumber = (portionNumber) => {
        dispatch(employeesActions.setPortionNumber(portionNumber))
    }


    const createNewEmploye = (newEmploye) => {
        dispatch(createOneNewEmploye(newEmploye, currentPage, pageSize))
    }


    return (
        <>
            <AnimatePresence>
                {
                    isShowCreateEmployeModalForm &&
                    <Modal setIsShow={setIsShowCreateEmployeModalForm}>
                        <CreateEmployeForm setIsShowCreateEmployModalForm={setIsShowCreateEmployeModalForm}
                            createNewEmploye={createNewEmploye}
                        />
                    </Modal>
                }
            </AnimatePresence>
            <div className={style.container}>
                <div className={style.createEmployeButtonWrapper} onClick={() => setIsShowCreateEmployeModalForm(true)}>
                    <img src={createEmployeIcon} className={style.createEmployeIcon} alt='createIcon' />
                </div>

                <div className={style.wrapper}>

                    {isLoading && <Loading />}

                    {

                        employees.map((employe) => <Employe employe={employe}
                            key={employe.id}
                            removeOneEmploye={removeOneEmploye}
                            updateEmployeData={updateEmployeData}
                        />
                        )

                    }
                </div>
                <div className={style.paginationWrapper}>
                    <Pagination totalItemsCount={totalEmployeesCount}
                        pageSize={pageSize}
                        portionNumber={portionNumber}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        setPortionNumber={setPortionNumber}
                    />
                </div>
            </div>
        </>
    )
}



