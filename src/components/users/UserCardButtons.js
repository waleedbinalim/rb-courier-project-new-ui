import React from 'react'
import {CardActions,Button} from '@material-ui/core'


export default function UserCardButtons({user , handleDelete , handleEdit}) {
    return (
        <CardActions>
        <Button 
            id={user._id} 
            variant="contained" size="small" color="primary" 
            onClick={(e) => {handleEdit(e)}}
        >
        EDIT
        </Button>
        <Button 
            id={user._id} 
            variant="contained" 
            size="small" 
            color="secondary" 
            onClick={(e) => {handleDelete(e)}}
        >
        DELETE
        </Button>
    </CardActions>
    )
}
