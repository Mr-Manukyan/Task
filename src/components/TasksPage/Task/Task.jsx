import React, { useState } from 'react'
import style from './Task.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../Common/Modal/Modal'
import { BsTrash } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'
import { UpdateTaskForm } from '../../Common/UpdateTaskForm/UpdateTaskForm'


export const Task = React.memo(({ task, removeOneTask, updateOneTaskData }) => {

    const [isShowModalForm, setIsShowModalForm] = useState(false)
    const navigate = useNavigate()


    const goToTaskInfoPage = () => {
        navigate(`/task/${task.id}`)
    }


    const updateTaskData = (updatedTaskData) => {
        updateOneTaskData(task.id, updatedTaskData)
        setIsShowModalForm(false)
    }


    return (
        <>
            <AnimatePresence>
                {
                    isShowModalForm &&
                    <Modal setIsShow={setIsShowModalForm}>
                        <div className={style.formContainer}>
                            <div className={style.paragraphWrapper}>
                                <p className={style.paragraph}>Update Task Data</p>
                            </div>
                            <UpdateTaskForm setIsShowUpdateTaskModalForm={setIsShowModalForm}
                                updateTaskData={updateTaskData}
                                task={task}
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
                layoutId={task.id}
            >
                <div className={style.taskBody} onClick={() => goToTaskInfoPage()}>
                    <div className={style.name}><span>{'Name : '}</span>{task.name}</div>
                    <div className={style.description}><span>{'Description : '}</span>{task.description}</div>
                    <div className={style.endDate}><span>{'Start Date : '}</span>{task.startDate}</div>
                    <div className={style.endDate}><span>{'End Date : '}</span>{task.endDate}</div>
                    <div className={style.employeeId}><span>{'EmployeeId : '}</span>{task.employeeId}</div>
                </div>
                <div className={style.editorBody}>
                    <BsPencilSquare className={style.updateIcon} onClick={() => setIsShowModalForm(true)} />
                    <BsTrash className={style.removeIcon} onClick={() => removeOneTask(task.id)} />
                </div>
            </motion.div>
        </>
    )
})
