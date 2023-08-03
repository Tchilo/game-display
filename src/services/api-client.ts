import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
      key:'790ace8f624144e682aadee38d1f5415'
    }
})

 