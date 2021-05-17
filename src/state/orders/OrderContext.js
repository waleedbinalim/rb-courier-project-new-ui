import React , {createContext , useState}from 'react';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
    let [filteredOrders, setFilteredOrders] = useState([])
    let [orders, setOrders] = useState([])
    let [orderSearch, setOrderSearch] = useState('')
    let [openEditModal , setOpenEditModal] = useState(false)
    let [editOrderValue , setEditOrderValue] = useState({deliveredTo: '', deliveredBy: ''})
    return (
        <OrderContext.Provider value={{
                filteredOrders, setFilteredOrders, orders, setOrders, orderSearch, setOrderSearch,
                openEditModal, setOpenEditModal, editOrderValue, setEditOrderValue
            }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider