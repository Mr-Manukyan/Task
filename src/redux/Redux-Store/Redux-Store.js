import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from '../Reducers/Employees-Reducer'
import { tasksReducer } from '../Reducers/Tasks-Reducer'

const rootReducer = () => ({
    employeesPage: employeesReducer,
    tasksPage: tasksReducer
})

export const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

window.store = store

export default store