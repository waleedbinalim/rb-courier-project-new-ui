import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    // const [filteredUsers, setFilteredUsers] = useState([])
    // const [users, setUsers] = useState([])
    // const [userSearch, setUserSearch] = useState('')
    const [openEditModal, setOpenEditModal] = useState(false)
    const [editUserValue, setEditUserValue] = useState({ name: 'blank', email: 'blank', city: 'blank', address: 'blank', phone: 'blank', })
    return (
        <UserContext.Provider value={{
            // filteredUsers, setFilteredUsers,
            // users, setUsers,
            // userSearch, setUserSearch,
            openEditModal, setOpenEditModal,
            editUserValue, setEditUserValue
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
