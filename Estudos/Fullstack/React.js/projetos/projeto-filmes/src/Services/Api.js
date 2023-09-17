import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

//const key = '6b3b4b1d4b829cab41837e4d95e0a6c2'

export default api



