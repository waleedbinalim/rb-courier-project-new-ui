import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { headers, api } from '../../utils/api/Api'

let useStyles = makeStyles((theme) => {
    return {
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        },
        button: {
            borderRadius: 8
        }
    }
})


export default function OrderForm() {
    const history = useHistory()
    const classes = useStyles();
    const [inputField, setInputField] = useState({
        deliveredTo: '',
        deliveredBy: ''
    })

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (inputField.deliveredTo && inputField.deliveredBy) {
            let data = JSON.stringify(inputField)
            await api.post('/orders/add', data, { headers: headers })
            let addedUser = await api.get('orders/all')
            history.push('/orders')
        }
    }

    return (
        <div className="form-card">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.field} label="Deliver To" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({ ...inputField, deliveredTo: e.target.value })} />
                <TextField className={classes.field} label="Deliver From" variant="outlined" fullWidth required onKeyUp={(e) => setInputField({ ...inputField, deliveredBy: e.target.value })} />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>SUBMIT</Button>
            </form>
        </div>
    )
}
