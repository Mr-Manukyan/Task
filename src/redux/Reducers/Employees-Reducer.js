import { employeesAPI } from "../../api/Employees-API/Employees-API"

const SET_EMPLOYEES = "APP/SET_EMPLOYEES"
const SET_ONE_EMPLOYE = "APP/SET_ONE_EMPLOYE"
const SET_EMPLOYEES_PORTION_NUMBER = 'SET_EMPLOYEES_PORTION_NUMBER'
const SET_NUMBER_PAGE = 'SET_EMPLOYEES_NUMBER_PAGE'
const SET_EMPLOYEES_TOTAL_COUNT = 'SEY_EMPLOYEES_TOTAL_COUNT'
const SET_IS_LOADING = "APP/SET_IS_LOADING"


let initialState = {
    employees: [],
    employe: {},
    isLoading: false,
    pageSize: 4,
    currentPage: 1,
    totalEmployeesCount: 0,
    portionNumber: 1,

}

export const employeesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees,
            }

        case SET_ONE_EMPLOYE:
            return {
                ...state,
                employe: action.employe,
            }
        case SET_NUMBER_PAGE:
            return {
                ...state,
                currentPage: action.currentPageNumber
            }

        case SET_EMPLOYEES_PORTION_NUMBER:
            return {
                ...state,
                portionNumber: action.portionNumber
            }

        case SET_EMPLOYEES_TOTAL_COUNT:
            return {
                ...state,
                totalEmployeesCount: action.totalEmployeesCount
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

export const employeesActions = {

    setEmployees: (employees) =>
    ({
        type: SET_EMPLOYEES,
        employees,
    }),

    setOneEmploye: (employe) =>
    ({
        type: SET_ONE_EMPLOYE,
        employe,
    }),

    setCurrentPage: (currentPageNumber) =>
    ({
        type: SET_NUMBER_PAGE,
        currentPageNumber,
    }),

    setPortionNumber: (portionNumber) =>
    ({
        type: SET_EMPLOYEES_PORTION_NUMBER,
        portionNumber,
    }),

    setTotalEmployeesCount: (totalEmployeesCount) =>
    ({
        type: SET_EMPLOYEES_TOTAL_COUNT,
        totalEmployeesCount,
    }),

    setIsLoading: (isLoading) =>
    ({
        type: SET_IS_LOADING,
        isLoading
    }),

}

// Thunk

export const getEmployees = (currentPage, pageSize) => {
    return async (dispatch) => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            dispatch(employeesActions.setCurrentPage(currentPage))
            const employees = await employeesAPI.getEmployess(currentPage, pageSize)
            const employessTotalCount = await employeesAPI.getEmployessTotalCount()
            if (employees) {
                dispatch(employeesActions.setEmployees(employees))
                dispatch(employeesActions.setTotalEmployeesCount(employessTotalCount))
            }
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }
    }
}

export const getOneEmployeInfo = (employeID) => {
    return async (dispatch) => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            const employe = await employeesAPI.getOneEmploye(employeID)
            dispatch(employeesActions.setOneEmploye(employe))
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }
    }
}



export const onEmployeesPageChanged = (p, pageSize) => {
    return async dispatch => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            dispatch(employeesActions.setCurrentPage(p))
            const data = await employeesAPI.getEmployess(p, pageSize)
            dispatch(employeesActions.setEmployees(data))
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }

    }
}


export const createOneNewEmploye = (newEmploye, currentPage, pageSize = 4) => {
    return async (dispatch) => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            await employeesAPI.createOneEnploye(newEmploye)
            dispatch(getEmployees(currentPage, pageSize))
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }
    }
}

export const deleteOneEmploye = (employeID, currentPage, pageSize) => {

    return async (dispatch) => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            await employeesAPI.removeOneEmploye(employeID)
            dispatch(getEmployees(currentPage, pageSize))
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }
    }
}


export const updateOneEmploeData = (id, updatedEmployeData, currentPage, pageSize) => {
    return async (dispatch) => {
        try {
            dispatch(employeesActions.setIsLoading(true))
            await employeesAPI.updateOneEmploeData(id, updatedEmployeData)
            dispatch(getEmployees(currentPage, pageSize))
            dispatch(employeesActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(employeesActions.setIsLoading(false))
        }
    }
}












