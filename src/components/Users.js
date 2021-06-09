import React, { useContext } from 'react'
import UserCards from '../components/users/UserCards'
import UserEditDialogue from '../components/users/UserEditDialogue'
import { Grid, Typography, TextField } from '@material-ui/core'
import { headers, api } from '../utils/api/Api'
import { UserContext } from '../state/users/UserContext'
import styled from 'styled-components'
import { allUsers } from '../constants/Constants'
import useFetchHook from '../utils/useFetchHook';
import useSearchHook from '../utils/useSearchHook'

const SearchBar = styled(TextField)`
    margin-top: 5px;
    background: white;
    overflow: hidden;
    border-radius: 5px;
`;
const H3 = styled(Typography)`
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 8px;
    @media(maxWidth: 600px) {
        font-size: 48px;
        line-height: 56px;
    }
`;

export default function Users() {
    const {
        // filteredUsers,
        // setFilteredUsers,
        // users,
        // setUsers,
        // userSearch,
        // setUserSearch,
        // openEditModal,
        setOpenEditModal,
        // editUserValue,
        setEditUserValue
    } = useContext(UserContext)
    const { data: users, setData: setUsers, filteredData: filteredUsers, setFilteredData: setFilteredUsers } = useFetchHook(allUsers)
    const { setSearch: setUserSearch } = useSearchHook(users, filteredUsers, setFilteredUsers)

    let handleDelete = async (e) => {
        let deleteURL = `/users/${e.currentTarget.id}`;
        await api.put(deleteURL, { isActive: false }, { headers: headers })
        // let updatedUsers = await api.get('/users/all')
        // setFilteredUsers(updatedUsers.data)
        // setUsers(updatedUsers.data)
    }

    let handleEdit = async (e) => {
        let userToEdit = await api.get('/users/' + e.currentTarget.id)
        setEditUserValue(userToEdit.data);
        setOpenEditModal(true)
    }

    return (
        <div>
            <UserEditDialogue setUsers={setUsers} setFilteredUsers={setFilteredUsers} />
            <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                    <div className="users-image-wrapper">
                        <H3 variant="h3">Users</H3>
                        <SearchBar
                            label="Search User"
                            variant="filled"
                            color="primary"
                            onKeyUp={(e) => { setUserSearch(e.target.value) }}
                        />
                    </div>
                </Grid>
            </Grid>
            <UserCards
                filteredUsers={filteredUsers}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    )
}
