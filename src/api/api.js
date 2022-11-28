import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://hh.autodrive-agency.ru',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;