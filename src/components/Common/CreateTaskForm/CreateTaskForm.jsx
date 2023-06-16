
import { TaskForm } from '../TaskForm/TaskForm'
import { MySelect } from '../ReactSelect/MySelect'
import { MyCalendar } from '../Calendar/Calendar'
import style from './CreateTaskForm.module.css'
import { Modal } from '../Modal/Modal'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import calendarIcon from '../../../assets/icons/calendar-icon.png'


export const CreateTaskForm = ({ setIsShowCreateTasksModalForm, createNewTask }) => {

    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [todoDate, setTodoDate] = useState(new Date())

    const onSubmit = (data, reset) => {
        createNewTask(data)
        setIsShowCreateTasksModalForm(false)
        reset()

    }

    const setNewDate = (date) => {
        setTodoDate(date)
    }

    return (

        <div className={style.container}>
            <div className={style.paragraphWrapper}>
                <p className={style.paragraph}>Create New Task</p>
            </div>
            <AnimatePresence>
                {isShowCalendar &&
                    <Modal setIsShow={setIsShowCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowCalendar} setNewDate={setNewDate} todoDate={todoDate} />
                    </Modal>
                }
            </AnimatePresence>
            <MySelect />
            <div className={style.calendarWrapper}>
                <div className={style.starCalendar}>
                    <p>Start Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarStart'
                        onClick={() => setIsShowCalendar(true)}
                    />
                </div>
                <div className={style.starCalendar}>
                    <p>End Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarEnd'
                        onClick={() => setIsShowCalendar(true)}
                    />
                </div>
            </div>
            <TaskForm onSubmit={onSubmit} />

        </div>
    )

}

