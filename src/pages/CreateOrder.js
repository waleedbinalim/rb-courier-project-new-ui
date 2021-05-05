import React from 'react'
import OrderForm from '../components/OrderForm'
import { Typography, makeStyles } from '@material-ui/core'

let useStyles = makeStyles((theme) => {
    return{
        text:{
            color: '#5b5b5bff',
            fontWeight: 600
        }

    }
})

export default function CreateOrder() {
    const classes = useStyles()
    return (
        <div className="form--inner">
            <Typography variant="h3" className={classes.text}>Create Order</Typography>
            <OrderForm/>
        </div>
    )
}
