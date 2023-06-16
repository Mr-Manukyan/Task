import { instance } from "../axios_instance"

export const tasksAPI = {

    getTasks(currentPage, pageSize) {
        return instance.get(`tasks?_page=${currentPage}&_limit=${pageSize}`).then((res) => res.data)
    },

    getTasksTotalCount() {
        return instance.get('tasks').then((res) => res.data.length)
    },

    // getOneEmploye(employeID) {
    //     return instance.get(`employees/${employeID}`).then((res) => res.data)
    // },



    // createOneEnploye(newEmploye) {
    //     return instance.post('employees', newEmploye).then(res => res.data)
    // },

    // removeOneEmploye(id) {
    //     return instance.delete(`employees/${id}`).then((res) => res.data)
    // },

    // updateOneEmploeData(id, updatedEmployeData) {
    //     return instance.patch(`employees/${id}`, updatedEmployeData).then((res) => res.data)
    // },


}