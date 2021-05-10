import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core";
import {headers ,api} from '../../api/Api'

const useStyles = makeStyles((theme) => {
    return{
        editForm: {
            padding: 24
        },
        fields:{
            margin: '12px 0px',
            display: 'block',
            padding: 16
        },
        dialoguePaper	:	{
          borderRadius: 16,
          minWidth: '70vw'
        }
    }
})

export default function SimpleDialogDemo({openEditModal , setOpenEditModal , editOrderValue , setEditOrderValue , setOrders , setFilteredOrders}) {
    const classes = useStyles();
    const handleClose = () => {
        setOpenEditModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = '/orders/' + editOrderValue._id
        let data = JSON.stringify(editOrderValue)
        await api.put( url , data , {headers: headers})
        let updatedOrders = await api.get('/orders/all')
        setOrders(updatedOrders.data)
        setFilteredOrders(updatedOrders.data)
        setOpenEditModal(false)
    }


  return (
    <div>
      <Dialog classes={{paper: classes.dialoguePaper}} borderRadis={16} onClose={handleClose} open={openEditModal}>
      <form className={classes.editForm} onSubmit={handleSubmit}>
          <input className={classes.fields} type="text" defaultValue={editOrderValue.deliveredTo} onKeyUp={(e) => setEditOrderValue({...editOrderValue , deliveredTo : e.target.value})}/>
          <input className={classes.fields} type="text" defaultValue={editOrderValue.deliveredBy} onKeyUp={(e) => setEditOrderValue({...editOrderValue , deliveredBy : e.target.value})}/>
        <Button type="submit" variant="contained" color="primary" >SUBMIT</Button>
      </form>
    </Dialog>
    </div>
  );
}
