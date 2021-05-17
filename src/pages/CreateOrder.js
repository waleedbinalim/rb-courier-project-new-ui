import React from 'react'
import OrderForm from '../components/orders/OrderForm'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const Heading = styled(Typography)`
    color: #5b5b5bff;
    font-weight: 600;
`;

export default function CreateOrder() {
    return (
        <div className="form--inner">
            <Heading variant="h3" >Create Order</Heading>
            <OrderForm/>
        </div>
    )
}
