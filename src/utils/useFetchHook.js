import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { statusCodes } from '../constants/Constants'

export default function useFetchHook(url) {
    const history = useHistory();
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(async () => {
        const data = await fetch(url, { credentials: 'include' });
        if (data.status === statusCodes.forbidden) { history.push('/login') }
        const responseData = await data.json();
        setData(responseData)
        setFilteredData(responseData)
    }, [url])

    return { data, setData, filteredData, setFilteredData }
}


