import React, {useState , useEffect} from 'react'
import {TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import OrderCards from '../components/OrderCards'
import OrderEditDialogue from '../components/OrderEditDialogue'
import axios from 'axios'

let headers = {'Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}
const api = axios.create({baseURL: 'http://localhost:5000/'})

 let useStyles = makeStyles((theme) => {
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
            ordersText:{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 580,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: 20
            },
            ordersHeading:{
                color: '#fff',
                fontWeight: 600,
                fontSize: 60,
                lineHeight: '68px',
                textAlign: 'center',
                marginBottom: '8px',
                [theme.breakpoints.down('sm')]: {
                    fontSize: 48,
                    lineHeight: '56px'
                  },
                [theme.breakpoints.down('xs')]: {
                    fontSize: 36,
                    lineHeight: '42px'
                  },
    
            },
     }
 })

export default function Orders() {
    const classes = useStyles()
    let [filteredOrders, setFilteredOrders] = useState([])
    let [orders, setOrders] = useState([])
    let [orderSearch, setOrderSearch] = useState('')
    let [openEditModal , setOpenEditModal] = useState(false)
    let [editOrderValue , setEditOrderValue] = useState({deliveredTo: '', deliveredBy: ''})


    useEffect(() => {
        fetch('http://localhost:5000/orders/all')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            setFilteredOrders(data)
        })
    },[])

    useEffect( ()=> {
        let filter = orders.filter(order => {
            return order._id.toLowerCase().includes(orderSearch.toLowerCase())   
        })
        setFilteredOrders(filter)
    },[orderSearch])

    let handleKeyPress= (e) => {
        setOrderSearch(e.target.value)
    }

    let handleDelete= async (e) => {
        const deleteURL = `/orders/${e.currentTarget.id}` ;
        await api.put(deleteURL, {isActive: false} , {headers: headers})
        let updatedOrders = await api.get('/orders/all')
        setFilteredOrders(updatedOrders.data)
        setOrders(updatedOrders.data)
    }

    let handleEdit= async (e) => {
        console.log(e.currentTarget.id)
        let orderToEdit = await api.get('/orders/' + e.currentTarget.id)
        setEditOrderValue(orderToEdit.data);
        setOpenEditModal(true)
    }

    return (
        <div>
            <OrderEditDialogue openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} editOrderValue={editOrderValue} setEditOrderValue={setEditOrderValue} setOrders={setOrders} setFilteredOrders={setFilteredOrders}/>
            <div className="orders-image-wrapper">
            <div className={classes.ordersText}>
                <Typography variant="h3" className={classes.ordersHeading}>Track Your Order</Typography>
                <Typography variant="p" className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam ducimus cupiditate magni esse delectus repellat eveniet praesentium quasi veritatis? Quis hic dolor, reiciendis impedit nam id beatae voluptas ad, non, libero voluptate eos?</Typography>
                <TextField
                    // id="outlined-secondary"
                    className={classes.searchField}
                    label="Enter Id"
                    variant="filled"
                    color="primary"
                    onKeyUp={(e) => {handleKeyPress(e)}}
                />
            </div>
            </div>
            <OrderCards filteredOrders={filteredOrders} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
    )
}
