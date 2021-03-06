import React , {useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, CardActions, Button } from '@material-ui/core'
import {makeStyles } from '@material-ui/core'
import {OrderContext} from '../../state/orders/OrderContext'

const useStyles = makeStyles((theme) => {
    return{
        cardContainer: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        card: {
            padding: 18,
            borderRadius: 18,
            width: '100%'
        },
        cardCol: {
            display: 'flex'
        },
        cardContent:{
            marginBottom: 8
        },
        spanTag: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2196f3ff',
            maxWidth: 'fit-content',
            padding: '6px 12px',
            color: '#fff',
            borderRadius: 20,
            textTransform: 'capitalize',
            fontSize: 12,
            [theme.breakpoints.down('md')]: {
                marginTop: 16
              },
        },
        spanDiv: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'flex-start'
              },
        },
        spanId: {
            fontSize: 12,
            fontWeight: 600,
            color: '#5b5b5bff'
        },
        buttonDiv: {
            width: '100%',
            height: '100%'
        },
        linkText: {
            textDecoration: `none`,
            color: `white`,
            textAlign: 'center'

        },
    }
})


export default function UserCards({handleDelete , handleEdit}) {
    const {filteredOrders} = useContext(OrderContext)
    const classes = useStyles()
    return (
        <div>
            <Grid align="center" item xs={12} sm={12} md={12}>
                <a className={classes.linkText} href="/create/order">
                    <Button variant="contained" size="large" color="secondary">Create Order</Button>    
                </a>
            </Grid>
            <Grid className={classes.cardContainer} container spacing={3}>
                {filteredOrders.map(order => {
                    if(order.isActive){
                        return(
                        
                            <Grid className={classes.cardCol} key={order._id} item xs={12} sm={6} md={4}>
                                <Card className={classes.card} elevation={5}>
                                    <CardHeader 
                                            title={
                                                <div className={classes.spanDiv}>
                                                    <span className={classes.spanId}>ID: {order._id}</span>
                                                    <span className={classes.spanTag}>{order.status}</span>
                                                </div>
                                            }
                                        />
            
                                    <CardContent>
                                        <Typography className={classes.cardContent}><strong>Delivery To:</strong> {order.deliveredTo}</Typography>
                                        <Typography className={classes.cardContent}><strong>Delivery By:</strong> {order.deliveredBy}</Typography>
                                        <Typography><strong>Is Active:</strong> {order.isActive ? 'Yes' : 'No'}</Typography>
                                    </CardContent>
    
                                    <CardActions>
                                        <Button id={order._id} variant="contained" size="small" color="primary"
                                            onClick={(e) => {handleEdit(e)}}
                                        >
                                        EDIT
                                        </Button>
                                        <Button id={order._id} variant="contained" size="small" color="secondary"
                                            onClick={(e) => {handleDelete(e)}}
                                        >
                                                DELETE
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </div>
    )
}
