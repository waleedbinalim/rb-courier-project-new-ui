import React, {useState, useEffect} from 'react'
import UserCards from '../components/UserCards'
import UserEditDialogue from '../components/UserEditDialogue'
import { Grid, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

let headers = {'Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}
const api = axios.create({baseURL: 'http://localhost:5000/'})


const useStyles = makeStyles((theme) => {
    return{
        searchField: {
            marginTop: theme.spacing(1.5),
            background: 'white',
            overflow: 'hidden',
            borderRadius: theme.spacing(1.5)
        },
        text: {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 8,
            '@media(maxWidth: 991px)' : {
               fontSize: 240
             },
        },
        userPageImage:{
            width: '100%'
        },

    }
})

export default function Users() {
    const classes = useStyles()
    let [filteredUsers,setFilteredUsers] = useState([])
    let [users,setUsers] = useState([])
    let [userSearch , setUserSearch] = useState('')
    let [openEditModal , setOpenEditModal] = useState(false)
    let [editUserValue , setEditUserValue] = useState({name: 'blank', email: 'blank', city: 'blank', address: 'blank', phone: 'blank', })

    useEffect( ()=> {
        fetch('http://localhost:5000/users/all')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setFilteredUsers(data)
        })
    },[])

    useEffect( ()=> {
        let filter = users.filter(user => {
            return user.name.toLowerCase().includes(userSearch.toLowerCase())   
        })
        // console.log(filter)
        setFilteredUsers(filter)
    },[userSearch])

    let handleKeyPress= (e) => {
        setUserSearch(e.target.value)
    }

    let handleDelete= async (e) => {
        let deleteURL = `/users/${e.currentTarget.id}`;
        await api.put(deleteURL , {isActive: true} , {headers: headers})
        let updatedUsers = await api.get('/users/all')
        setFilteredUsers(updatedUsers.data)
        setUsers(updatedUsers.data)
    }

    let handleEdit= async (e) => {
        let userToEdit = await api.get('/users/' + e.currentTarget.id)
        setEditUserValue(userToEdit.data);
        setOpenEditModal(true)
    }



    return (
        <div>
            <UserEditDialogue editUserValue={editUserValue} setEditUserValue={setEditUserValue} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} setUsers={setUsers} setFilteredUsers={setFilteredUsers}/>
            <Grid container>
                <Grid className={classes.userPageImage} item md={12}>
                    <div className="users-image-wrapper">
                    <div className={classes.ordersText}>
                        <Typography variant="h3" className={classes.text}>Users</Typography>
                        <TextField
                            className={classes.searchField}
                            label="Search User"
                            variant="filled"
                            color="primary"
                            onKeyUp={(e) => {handleKeyPress(e)}}
                        />
                    </div>
                    </div>
                </Grid>
            </Grid>
            <UserCards filteredUsers={filteredUsers} handleDelete={handleDelete} handleEdit={handleEdit}/>

        </div>
    )
}
