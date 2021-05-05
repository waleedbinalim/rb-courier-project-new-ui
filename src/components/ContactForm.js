import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

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

    const classes = useStyles();

    return (
        <div className="form-card">
                <form noValidate autoComplete="off">
                    <TextField className={classes.field} label="First Name" variant="outlined" color="secondary" fullWidth required />
                    <TextField className={classes.field} label="Last Name" variant="outlined" color="secondary" fullWidth required />
                    <TextField className={classes.field} label="Email" variant="outlined" color="secondary" fullWidth required />
                    <TextField className={classes.field} label="Message" multiline rows={6} variant="outlined" color="secondary" fullWidth required />
                    <Button className={classes.button} variant="contained" color="secondary" >SUBMIT</Button>
                </form>
        </div>
    )
}
