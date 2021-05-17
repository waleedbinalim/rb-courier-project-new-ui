import React, {useEffect, useContext} from 'react'
import {TextField, Typography} from '@material-ui/core'
import OrderCards from './orders/OrderCards'
import OrderEditDialogue from './orders/OrderEditDialogue'
import {headers , api} from '../api/Api'
import {OrderContext} from '../state/orders/OrderContext'
import styled from 'styled-components'
import {allOrders} from '../constants/Constants'

const SearchBar = styled(TextField)`
    margin-top: 5px;
    background: white;
    overflow: hidden;
    border-radius: 5px;
`;
const OrdersImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    color: #fff;
    text-align: center;
`;
const H3 = styled(Typography)`
    font-weight: 600;
    font-size: 60px;
    line-height: 68px;
    margin-bottom: 8px;
    @media(maxWidth: 600px) {
        font-size: 48px;
        line-height: 56px;
    }
`;
const Paragraph = styled(Typography)`
    font-weight: 600;
    margin-bottom: 8px;
`;

export default function Orders() {
    const {filteredOrders , setFilteredOrders , orders , setOrders , orderSearch , setOrderSearch,
    openEditModal, setOpenEditModal , editOrderValue , setEditOrderValue} = useContext(OrderContext)


    useEffect(() => {
        fetch(allOrders)
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
        let orderToEdit = await api.get('/orders/' + e.currentTarget.id)
        setEditOrderValue(orderToEdit.data);
        setOpenEditModal(true)
    }

    return (
        <div>
            <OrderEditDialogue/>
            <div className="orders-image-wrapper">
            <OrdersImageContainer>
                <H3 variant="h3">Track Your Order</H3>
                <Paragraph variant="p" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam ducimus 
                    cupiditate magni esse delectus repellat eveniet praesentium quasi veritatis? Quis 
                    hic dolor, reiciendis impedit nam id beatae voluptas ad, non, libero voluptate eos?
                </Paragraph>
                <SearchBar
                    label="Enter Id"
                    variant="filled"
                    color="primary"
                    onKeyUp={(e) => {handleKeyPress(e)}}
                />
            </OrdersImageContainer>
            </div>
            <OrderCards filteredOrders={filteredOrders} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
    )
}
