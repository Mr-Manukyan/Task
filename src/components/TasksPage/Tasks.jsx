import React, { useEffect, useState } from 'react'
import style from './Tasks.module.css'
import {
    createOneNewTask, deleteOneTask, getAllEmployeesFullName,
    getTasks, onTasksPageChanged, updateOneTaskData
} from '../../redux/Reducers/Tasks-Reducer'
import {
    getAllTasks, getTasksPageSize,
    getTasksPortionNumber, getTasksCurrentPage,
    getTotalTasksCount, getTasksPageIsLoading,
} from '../../redux/Selectors/Tasks-Selector'
import { Loading } from '../Common/Loading/Loading'
import { Modal } from '../Common/Modal/Modal'
import { Pagination } from '../Common/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { Task } from './Task/Task'
import addTaskIcon from '../../assets/icons/addTaskIcon.png'
import { CreateTaskForm } from '../Common/CreateTaskForm/CreateTaskForm'
import { SearchTask } from '../Common/SearchTask/SearchTask'

export const Tasks = React.memo(() => {

    const dispatch = useDispatch()
    const pageSize = useSelector(getTasksPageSize)
    const currentPage = useSelector(getTasksCurrentPage)

    useEffect(() => {
        dispatch(getTasks(currentPage, pageSize))
        dispatch(getAllEmployeesFullName())
    }, [])

    const [isShowCreateTasksModalForm, setIsShowCreateTasksModalForm] = useState(false)

    const tasks = useSelector(getAllTasks)
    const portionNumber = useSelector(getTasksPortionNumber)
    const totalTasksCount = useSelector(getTotalTasksCount)
    const isLoading = useSelector(getTasksPageIsLoading)


    const removeOneTask = (taskID) => {
        dispatch(deleteOneTask(taskID, currentPage, pageSize))
    }

    const updateTaskData = (taskId, updatedTaskData) => {
        dispatch(updateOneTaskData(taskId, updatedTaskData, currentPage, pageSize))
    }

    const onPageChanged = (p) => {
        dispatch(onTasksPageChanged(p, pageSize))
    }


    const createNewTask = (newTask) => {
        dispatch(createOneNewTask(newTask, currentPage, pageSize))
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
                <div className={style.createTaskIconWrapper}>
                    <SearchTask />
                    <div className={style.createTaskButtonWrapper} onClick={() => setIsShowCreateTasksModalForm(true)}>
                        <img src={addTaskIcon} className={style.createTaskIcon} alt='createIcon' />
                    </div>
                </div>
                <div className={style.wrapper}>

                    {isLoading && <Loading />}

                    {
                        tasks.map((task) => <Task task={task}
                            key={task.id}
                            removeOneTask={removeOneTask}
                            updateOneTaskData={updateTaskData}
                            currentPage={currentPage}
                            pageSize={pageSize}
                        />
                        )
                    }


                    {tasks.length === 0
                        ? <motion.div className={style.noResult}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: .1, delay: .3 }}
                        >
                            <p>Not found</p>
                        </motion.div>
                        : null
                    }
                </div>
                <div className={style.paginationWrapper}>
                    <Pagination totalItemsCount={totalTasksCount}
                        pageSize={pageSize}
                        portionNumber={portionNumber}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                    />
                </div>
            </div>
        </>
    )
}
)

