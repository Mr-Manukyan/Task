import { TaskForm } from '../TaskForm/TaskForm'
import { MySelect } from '../ReactSelect/MySelect'
import { MyCalendar } from '../Calendar/Calendar'
import style from './UpdateTaskForm.module.css'
import { ModalCalendar } from '../ModalCalendar/ModalCalendar'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import calendarIcon from '../../../assets/icons/calendar-icon.png'
import { dateFormatter } from '../../../helpers/helpers'
import { useSelector } from 'react-redux'
import { getAllEmpolyeesFullName } from '../../../redux/Selectors/Tasks-Selector'



export const UpdateTaskForm = ({ setIsShowUpdateTaskModalForm, updateTaskData, task }) => {

    const [isShowStartCalendar, setIsShowStartCalendar] = useState(false)
    const [isShowEndCalendar, setIsShowEndCalendar] = useState(false)
    const [startDate, setStartDate] = useState(task.startDate)
    const [endDate, setEndDate] = useState(task.endDate)
    const [employeeId, setImployeID] = useState(task.employeeId)
    const EmployeesFullNames = useSelector(getAllEmpolyeesFullName)
    const currentEmploye = EmployeesFullNames.find(employe => employe.id === task.employeeId)

    const onSubmit = (data, reset) => {
        updateTaskData({
            ...data,
            startDate,
            endDate,
            employeeId
        })
        setIsShowUpdateTaskModalForm(false)
        reset()

    }

    const setNewStartDate = (date) => {
        setStartDate(dateFormatter(date))
    }

    const setNewEndDate = (date) => {
        setEndDate(dateFormatter(date))
    }

    return (

        <div className={style.container}>
            <AnimatePresence>
                {isShowStartCalendar &&
                    <ModalCalendar setIsShow={setIsShowStartCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowStartCalendar} setNewDate={setNewStartDate} />
                    </ModalCalendar>
                }
                {isShowEndCalendar &&
                    <ModalCalendar setIsShow={setIsShowEndCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowEndCalendar} setNewDate={setNewEndDate} />
                    </ModalCalendar>
                }
            </AnimatePresence>
            <MySelect setImployeID={setImployeID} currentEmployeFullName={currentEmploye.value} />
            <div className={style.calendarWrapper}>
                <div className={style.starDateCalendar}>
                    <p className={style.startDate}>Start Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarStart'
                        onClick={() => setIsShowStartCalendar(true)}
                    />
                    <p className={style.startDateText}>{startDate}</p>
                </div>
                <div className={style.endDateCalendar}>
                    <p className={style.endDate}>End Date</p>
                    <img src={calendarIcon}
                        className={style.calendar}
                        alt='calendarEnd'
                        onClick={() => setIsShowEndCalendar(true)}
                    />
                    <p className={style.endDateText}>{endDate}</p>
                </div>
            </div>
            <TaskForm onSubmit={onSubmit} defultValues={task} buttonBlueStyle buttonName='Update' />

        </div>
    )

}

