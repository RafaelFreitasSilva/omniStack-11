import axios from 'axios'
    //Padrão em todas as chamadas 
const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

export default api