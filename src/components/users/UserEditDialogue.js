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
    }
})

export default function SimpleDialogDemo({openEditModal , setOpenEditModal , editUserValue , setEditUserValue , setUsers , setFilteredUsers}) {
    const classes = useStyles();
    const handleClose = () => {
        setOpenEditModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = '/users/' + editUserValue._id
        let data = JSON.stringify(editUserValue)
        await api.put( url , data , {headers: headers})
        let updatedUsers = await api.get('/users/all')
        setUsers(updatedUsers.data)
        setFilteredUsers(updatedUsers.data)
        setOpenEditModal(false)
    }


  return (
    <div>
      <Dialog onClose={handleClose} open={openEditModal}>
      <form className={classes.editForm} onSubmit={handleSubmit}>
          <input className={classes.fields} type="text" defaultValue={editUserValue.name} onKeyUp={(e) => setEditUserValue({...editUserValue , name : e.target.value})}/>
          <input className={classes.fields} type="text" defaultValue={editUserValue.email} onKeyUp={(e) => setEditUserValue({...editUserValue , email : e.target.value})}/>
          <input className={classes.fields} type="text" defaultValue={editUserValue.city} onKeyUp={(e) => setEditUserValue({...editUserValue , city : e.target.value})}/>
          <input className={classes.fields} type="text" defaultValue={editUserValue.address} onKeyUp={(e) => setEditUserValue({...editUserValue , address : e.target.value})}/>
          <input className={classes.fields} type="text" defaultValue={editUserValue.phone} onKeyUp={(e) => setEditUserValue({...editUserValue , phone : e.target.value})}/>
        <Button type="submit" variant="contained" color="primary" >SUBMIT</Button>
      </form>
    </Dialog>
    </div>
  );
}
