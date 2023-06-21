export const getAllEmployees = (state) => {
    return state.employeesPage.employees
}

export const getEmployeesPageIsLoading = (state) => {
    return state.employeesPage.isLoading
}

export const getEmloyeesPageSize = (state) => {
    return state.employeesPage.pageSize
}

export const getTotalEmloyeesCount = (state) => {
    return state.employeesPage.totalEmployeesCount
}

export const getEmloyeesCurrentPage = (state) => {
    return state.employeesPage.currentPage
}

export const getEmloyeesPortionNumber = (state) => {
    return state.employeesPage.portionNumber
}

export const getOneEmploye = (state) => {
    return state.employeesPage.employe
}

export const getAllEmployeTasks = (state) => {
    return state.employeesPage.employeAllTasks
}