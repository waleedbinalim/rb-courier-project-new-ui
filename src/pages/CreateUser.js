import React from 'react'
import UserForm from '../components/UserForm'
import { Typography, makeStyles } from '@material-ui/core'

let useStyles = makeStyles((theme) => {
    return{
        text:{
            color: '#5b5b5bff',
            fontWeight: 600
        }

    }
})


export default function CreateUser() {
    const classes = useStyles()
    return (
        <div className="form--inner">
            <Typography variant="h3" className={classes.text}>Create User</Typography>
            <UserForm/>
        </div>
    )
}
