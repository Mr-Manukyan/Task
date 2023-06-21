import { instance } from "../axios_instance"

export const tasksAPI = {

    getTasks(currentPage, pageSize) {
        return instance.get(`tasks?_page=${currentPage}&_limit=${pageSize}`).then((res) => res.data)
    },

    getTasksTotalCount() {
        return instance.get('tasks').then((res) => res.data.length)
    },

    getAllEmployees() {
        return instance.get(`employees`).then((res) => res.data)
    },


    createOneTask(newTask) {
        return instance.post('tasks', newTask).then(res => res.data)
    },

    updateOneTaskData(taskId, updatedTaskData) {
        return instance.patch(`tasks/${taskId}`, updatedTaskData).then((res) => res.data)
    },

    removeOneTask(taskId) {
        return instance.delete(`tasks/${taskId}`).then((res) => res.data)
    },

    getAllEmployeTasksByID(employeID) {
        return instance.get(`tasks?employeeId=${employeID}`).then((res) => res.data)
    },

    getOneTask(taskID) {
        return instance.get(`tasks/${taskID}`).then((res) => res.data)
    },

    searchTaskByName(employeName) {
        return instance.get(`tasks?name_like=${employeName}`).then((res) => res.data)
    },

}