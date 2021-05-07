import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {headers ,api} from '../../api/Api'

let useStyles = makeStyles((theme) => {
    return{
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block',
            borderRadius: theme.spacing(3)
        },
        button: {
            borderRadius: 8
        }

    }
})


export default function UserForm() {
    const history = useHistory()
    const classes = useStyles();
    const [inputField , setInputField] = useState({
        name: '',
        email: '',
        city: '',
        address: '',
        phone: '',

    })

    let handleSubmit = async (e) => {
        e.preventDefault();
        if(inputField.name && inputField.email && inputField.city && inputField.address && inputField.phone){
            let data = JSON.stringify(inputField)
            await api.post('/users/add', data , {headers: headers})
            let addedUser = await api.get('users/all')
            console.log(addedUser.data)
            history.push('/users')
        }
    }

    return (
        <div className="form-card">
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField className={classes.field} label="Name" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({...inputField , name : e.target.value})} />
                    <TextField className={classes.field} label="Email" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({...inputField , email : e.target.value})} />
                    <TextField className={classes.field} label="City" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({...inputField , city : e.target.value})} />
                    <TextField className={classes.field} label="Address" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({...inputField , address : e.target.value})} />
                    <TextField className={classes.field} label="Phone" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({...inputField , phone : e.target.value})} />
                    <Button type="submit" className={classes.button} variant="contained" color="primary" >SUBMIT</Button>
                </form>
        </div>
    )
}
