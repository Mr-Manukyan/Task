import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { BsTrash } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'
import { Modal } from '../../Common/Modal/Modal'
import style from './Employe.module.css'
import { EmployeForm } from '../../Common/EmployeForm/EmployeForm'



export const Employe = ({ employe, removeOneEmploye, updateEmployeData }) => {

    const [isShowModalForm, setIsShowModalForm] = useState(false)
    const navigate = useNavigate()

    const goToEmployeInfoPage = () => {
        navigate(`/employe/${employe.id}`)
    }
    const onSubmit = (updatedData) => {
        updateEmployeData(employe.id, updatedData)
        setIsShowModalForm(false)
    }


    return (
        <>
            <AnimatePresence>
                {
                    isShowModalForm &&
                    <Modal setIsShow={setIsShowModalForm}>
                        <div className={style.fromContainer}>
                            <div className={style.paragraphWrapper}>
                                <p className={style.paragraph}>Update Employe Data</p>
                            </div>
                            <EmployeForm onSubmit={onSubmit}
                                buttonName='update'
                                buttonBlueStyle
                                defultValues={employe}

                            />
                        </div>
                    </Modal>
                }
            </AnimatePresence>

            <motion.div className={style.container}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: .3 }}
                layoutId={employe.id}
            >
                <div className={style.userBody} onClick={() => goToEmployeInfoPage()}>
                    <p className={style.firstName}><span>{'Name : '}</span>{employe.name}</p>
                    <p className={style.lastName}><span>{'Surname : '}</span>{employe.surname}</p>
                    <p className={style.email}><span>{'Email : '}</span>{employe.email}</p>
                    <p className={style.employePosition}><span>{'Position : '}</span>{employe.position}</p>
                    <p className={style.employeId}><span>{'ID : '}</span>{employe.id}</p>

                </div>
                <div className={style.editorBody}>
                    <BsPencilSquare className={style.updateIcon} onClick={() => setIsShowModalForm(true)} />
                    <BsTrash className={style.removeIcon} onClick={() => removeOneEmploye(employe.id)} />
                </div>
            </motion.div>
        </>
    )
}

