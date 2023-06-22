import { tasksAPI } from "../../api/Employees-API/Tasks-API"


const SET_TASKS = "APP/SET_TASKS"
const SET_ONE_TASK = "APP/SET_ONE_TASK"
const SET_TASKS_PORTION_NUMBER = 'SET_TASKS_PORTION_NUMBER'
const SET_NUMBER_PAGE = 'SET_EMPLOYEES_NUMBER_PAGE'
const SET_TASKS_TOTAL_COUNT = 'SET_TASKS_TOTAL_COUNT'
const SET_IS_LOADING = "APP/SET_IS_LOADING"
const SET_ALL_EMPOLYEES_FULL_NAME = "APP/SET_ALL_EMPOLYEES_FULL_NAME"



let initialState = {
    tasks: [],
    task: {},
    employeesFullName: [],
    isLoading: false,
    pageSize: 4,
    currentPage: 1,
    totalTaskCount: 0,
    portionNumber: 1,
}

export const tasksReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
            }

        case SET_ONE_TASK:
            return {
                ...state,
                task: action.task,
            }
        case SET_NUMBER_PAGE:
            return {
                ...state,
                currentPage: action.currentPageNumber
            }

        case SET_TASKS_PORTION_NUMBER:
            return {
                ...state,
                portionNumber: action.portionNumber
            }

        case SET_TASKS_TOTAL_COUNT:
            return {
                ...state,
                totalTaskCount: action.totalTaskCount
            }

        case SET_ALL_EMPOLYEES_FULL_NAME:
            return {
                ...state,
                employeesFullName: action.allEmployees.map((employe) => {
                    return {
                        value: `${employe.name} ${employe.surname}`,
                        label: `${employe.name} ${employe.surname}`,
                        id: employe.id
                    }

                })
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state
    }
}

// ActionCreator

export const tasksActions = {

    setTasks: (tasks) =>
    ({
        type: SET_TASKS,
        tasks,
    }),

    setOneTask: (task) =>
    ({
        type: SET_ONE_TASK,
        task,
    }),

    setCurrentPage: (currentPageNumber) =>
    ({
        type: SET_NUMBER_PAGE,
        currentPageNumber,
    }),

    setPortionNumber: (portionNumber) =>
    ({
        type: SET_TASKS_PORTION_NUMBER,
        portionNumber,
    }),

    setTotalTasksCount: (totalTaskCount) =>
    ({
        type: SET_TASKS_TOTAL_COUNT,
        totalTaskCount,
    }),

    setEmplyeesFullName: (allEmployees) =>
    ({
        type: SET_ALL_EMPOLYEES_FULL_NAME,
        allEmployees,
    }),

    setIsLoading: (isLoading) =>
    ({
        type: SET_IS_LOADING,
        isLoading
    }),

}

// Thunk

export const getTasks = (currentPage, pageSize) => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            dispatch(tasksActions.setCurrentPage(currentPage))
            const tasks = await tasksAPI.getTasks(currentPage, pageSize)
            const tasksTotalCount = await tasksAPI.getTasksTotalCount()
            if (tasks) {
                dispatch(tasksActions.setTasks(tasks))
                dispatch(tasksActions.setTotalTasksCount(tasksTotalCount))
            }
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}

export const getAllEmployeesFullName = () => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            const allEmployees = await tasksAPI.getAllEmployees()
            dispatch(tasksActions.setEmplyeesFullName(allEmployees))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}

export const getOneTaskInfo = (taskID) => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            const task = await tasksAPI.getOneTask(taskID)
            dispatch(tasksActions.setOneTask(task))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}



export const onTasksPageChanged = (p, pageSize) => {
    return async dispatch => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            dispatch(tasksActions.setCurrentPage(p))
            const tasks = await tasksAPI.getTasks(p, pageSize)
            dispatch(tasksActions.setTasks(tasks))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }

    }
}


export const createOneNewTask = (newTask, currentPage, pageSize = 4) => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            await tasksAPI.createOneTask(newTask)
            dispatch(getTasks(currentPage, pageSize))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}

export const deleteOneTask = (taskId, currentPage, pageSize) => {

    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            await tasksAPI.removeOneTask(taskId)
            dispatch(getTasks(currentPage, pageSize))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}


export const updateOneTaskData = (taskId, updatedTaskData, currentPage, pageSize) => {

    return async (dispatch) => {

        try {
            dispatch(tasksActions.setIsLoading(true))
            await tasksAPI.updateOneTaskData(taskId, updatedTaskData)
            dispatch(getTasks(currentPage, pageSize))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}

export const searchTaskByEmployeName = (employeName) => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            const tasks = await tasksAPI.searchTaskByName(employeName)
            dispatch(tasksActions.setTasks(tasks))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}

export const searchTaskByDateData = (startDate, endDate) => {
    return async (dispatch) => {
        try {
            dispatch(tasksActions.setIsLoading(true))
            const tasks = await tasksAPI.searchTaskByDate(startDate, endDate)
            dispatch(tasksActions.setTasks(tasks))
            dispatch(tasksActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(tasksActions.setIsLoading(false))
        }
    }
}












