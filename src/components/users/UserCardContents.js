import React from 'react'
import {CardContent, Typography} from '@material-ui/core'

export default function UserCardContents({user, classes}) {
    return (
        <CardContent>
            <Typography className={classes.cardContent}><strong>City:</strong> {user.city}</Typography>
            <Typography className={classes.cardContent}><strong>Address:</strong> {user.address}</Typography>
            <Typography><strong>Phone:</strong> {user.phone}</Typography>
            <Typography><strong>Is Active:</strong> {user.isActive ? 'Yes' : 'No'}</Typography>
        </CardContent>
    )
}
