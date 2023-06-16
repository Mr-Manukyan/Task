import React, { useEffect, useState } from 'react'
import style from './Tasks.module.css'
import { getTasks, tasksActions } from '../../redux/Reducers/Tasks-Reducer'
import {
    getAllTasks, getTasksPageSize,
    getTasksPortionNumber, getTasksCurrentPage,
    getTotalTasksCount, getTasksPageIsLoading
} from '../../redux/Selectors/Tasks-Selector'
import { Loading } from '../Common/Loading/Loading'
import { Modal } from '../Common/Modal/Modal'
import { Pagination } from '../Common/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { Task } from './Task/Task'
import addTaskIcon from '../../assets/icons/addTaskIcon.png'
import { CreateTaskForm } from '../Common/CreateTaskForm/CreateTaskForm'

export const Tasks = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks(currentPage, pageSize))
    }, [])

    const [isShowCreateTasksModalForm, setIsShowCreateTasksModalForm] = useState(false)

    const tasks = useSelector(getAllTasks)
    const pageSize = useSelector(getTasksPageSize)
    const portionNumber = useSelector(getTasksPortionNumber)
    const currentPage = useSelector(getTasksCurrentPage)
    const totalTasksCount = useSelector(getTotalTasksCount)
    const isLoading = useSelector(getTasksPageIsLoading)


    const removeOneTasks = (taskID) => {
        // dispatch(deleteOneTask(taskID, currentPage, pageSize))
    }

    const updateTaskData = (id, updatedTaskData) => {
        // dispatch(updateOneTaskData(id, updatedTaskData, currentPage, pageSize))
    }

    const onPageChanged = (p) => {
        // dispatch(onTasksPageChanged(p, pageSize))
    }

    const setPortionNumber = (portionNumber) => {
        // dispatch(tasksActions.setPortionNumber(portionNumber))
    }


    const createNewTask = (newTask) => {
        // dispatch(createOneNewTask(newTask, currentPage, pageSize))
    }


    return (
        <>
            <AnimatePresence>
                {
                    isShowCreateTasksModalForm &&
                    <Modal setIsShow={setIsShowCreateTasksModalForm}>
                        <CreateTaskForm setIsShowCreateTasksModalForm={setIsShowCreateTasksModalForm}
                            createNewTask={createNewTask}
                        />
                    </Modal>
                }
            </AnimatePresence>
            <div className={style.container}>
                <div className={style.createTaskButtonWrapper} onClick={() => setIsShowCreateTasksModalForm(true)}>
                    <img src={addTaskIcon} className={style.createTaskIcon} alt='createIcon' />
                </div>

                <div className={style.wrapper}>
                    {
                        !tasks.length && <div className={style.taskEmptyBox}>
                            <p className={style.taskEmptyText1}>No registered task yet.</p>
                            <p className={style.taskEmptyText2}>Create a new task.</p>
                        </div>
                    }


                    {isLoading && <Loading />}

                    {

                        tasks.map((task) => <Task task={task}
                            key={task.id}
                            removeOneTasks={removeOneTasks}
                            updateTaskData={updateTaskData}
                        />
                        )

                    }
                </div>
                <div className={style.paginationWrapper}>
                    <Pagination totalItemsCount={totalTasksCount}
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

