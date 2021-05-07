import axios from 'axios'

export const headers = {'Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}
export const baseURL = 'http://localhost:5000'
export const api = axios.create({baseURL})