import axios from 'axios'

const instance = axios.create({
         baseURL: "https://tiktokmernbackend-devanshudevd4400.b4a.run"
})

export default instance