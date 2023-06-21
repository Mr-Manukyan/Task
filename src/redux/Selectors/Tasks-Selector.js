export const getAllTasks = (state) => {
    return state.tasksPage.tasks
}

export const getTasksPageIsLoading = (state) => {
    return state.tasksPage.isLoading
}

export const getTasksPageSize = (state) => {
    return state.tasksPage.pageSize
}

export const getTotalTasksCount = (state) => {
    return state.tasksPage.totalTaskCount
}

export const getTasksCurrentPage = (state) => {
    return state.tasksPage.currentPage
}

export const getTasksPortionNumber = (state) => {
    return state.tasksPage.portionNumber
}

export const getOneTask = (state) => {
    return state.tasksPage.task
}
export const getAllEmpolyeesFullName = (state) => {
    return state.tasksPage.employeesFullName
}

