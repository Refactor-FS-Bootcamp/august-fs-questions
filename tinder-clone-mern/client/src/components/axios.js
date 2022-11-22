import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-fs2.herokuapp.com"
})

export default instance