import axios from 'axios'

export const instance = axios.create({
    baseURL: "https://rocky-temple-83495.herokuapp.com/"
})


