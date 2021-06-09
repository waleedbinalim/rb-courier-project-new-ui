import { useEffect, useState } from 'react'

export default function useSearchHook(data, filteredUsers, setFilteredUsers) {
    const [search, setSearch] = useState('')

    useEffect(() => {
        let filter = data?.filter(item => {
            if (item.name) {
                return item.name.toLowerCase().includes(search.toLowerCase())
            }
            else {
                return item._id.toLowerCase().includes(search.toLowerCase())
            }
        })
        setFilteredUsers(filter)
    }, [search])

    return { setSearch }

}