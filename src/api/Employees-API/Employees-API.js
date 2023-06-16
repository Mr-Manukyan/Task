import { instance } from "../axios_instance"

export const employeesAPI = {

    getEmployess(currentPage, pageSize) {
        return instance.get(`employees?_page=${currentPage}&_limit=${pageSize}`).then((res) => res.data)
    },

    getOneEmploye(employeID) {
        return instance.get(`employees/${employeID}`).then((res) => res.data)
    },

    getEmployessTotalCount() {
        return instance.get('employees').then((res) => res.data.length)
    },

    createOneEnploye(newEmploye) {
        return instance.post('employees', newEmploye).then(res => res.data)
    },

    removeOneEmploye(id) {
        return instance.delete(`employees/${id}`).then((res) => res.data)
    },

    updateOneEmploeData(id, updatedEmployeData) {
        return instance.patch(`employees/${id}`, updatedEmployeData).then((res) => res.data)
    },


}