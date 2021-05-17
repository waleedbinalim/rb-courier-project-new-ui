import axios from 'axios'

export const headers = {'Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}
export const api = axios.create({baseURL: 'http://localhost:5000'})