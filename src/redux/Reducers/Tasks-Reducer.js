import { tasksAPI } from "../../api/Employees-API/Tasks-API"


const SET_TASKS = "APP/SET_TASKS"
const SET_ONE_TASK = "APP/SET_ONE_TASK"
const SET_TASKS_PORTION_NUMBER = 'SET_TASKS_PORTION_NUMBER'
const SET_NUMBER_PAGE = 'SET_EMPLOYEES_NUMBER_PAGE'
const SET_TASKS_TOTAL_COUNT = 'SET_TASKS_TOTAL_COUNT'
const SET_IS_LOADING = "APP/SET_IS_LOADING"


let initialState = {
    tasks: [],
    task: {},
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

// export const getOneEmployeInfo = (employeID) => {
//     return async (dispatch) => {
//         try {
//             dispatch(employeesActions.setIsLoading(true))
//             const employe = await employeesAPI.getOneEmploye(employeID)
//             dispatch(employeesActions.setOneEmploye(employe))
//             dispatch(employeesActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(employeesActions.setIsLoading(false))
//         }
//     }
// }



// export const onEmployeesPageChanged = (p, pageSize) => {
//     return async dispatch => {
//         try {
//             dispatch(employeesActions.setIsLoading(true))
//             dispatch(employeesActions.setCurrentPage(p))
//             const data = await employeesAPI.getEmployess(p, pageSize)
//             dispatch(employeesActions.setEmployees(data))
//             dispatch(employeesActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(employeesActions.setIsLoading(false))
//         }

//     }
// }


// export const createOneNewEmploye = (newEmploye, currentPage, pageSize = 4) => {
//     return async (dispatch) => {
//         try {
//             dispatch(employeesActions.setIsLoading(true))
//             await employeesAPI.createOneEnploye(newEmploye)
//             dispatch(getEmployees(currentPage, pageSize))
//             dispatch(employeesActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(employeesActions.setIsLoading(false))
//         }
//     }
// }

// export const deleteOneEmploye = (employeID, currentPage, pageSize) => {

//     return async (dispatch) => {
//         try {
//             dispatch(employeesActions.setIsLoading(true))
//             await employeesAPI.removeOneEmploye(employeID)
//             dispatch(getEmployees(currentPage, pageSize))
//             dispatch(employeesActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(employeesActions.setIsLoading(false))
//         }
//     }
// }


// export const updateOneEmploeData = (id, updatedEmployeData, currentPage, pageSize) => {
//     return async (dispatch) => {
//         try {
//             dispatch(employeesActions.setIsLoading(true))
//             await employeesAPI.updateOneEmploeData(id, updatedEmployeData)
//             dispatch(getEmployees(currentPage, pageSize))
//             dispatch(employeesActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(employeesActions.setIsLoading(false))
//         }
//     }
// }












