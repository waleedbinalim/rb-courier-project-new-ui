import axios from 'axios'

axios.defaults.withCredentials = true

export const headers = {'Content-Type': 'application/json;charset=UTF-8',
"Access-Control-Allow-Origin": "http://localhost:5000",
'Access-Control-Allow-Credentials': 'true'
}
export const api = axios.create({baseURL: 'http://localhost:5000'})