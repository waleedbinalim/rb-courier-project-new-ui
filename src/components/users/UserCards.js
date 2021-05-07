import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, CardActions, Button, Avatar } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => {
    return{
        cardContainer: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)
        },
        userAvatar: {
            backgroundColor: () => {
                    return blue[500]
            }
        },
        card: {
            padding: 18,
            borderRadius: 18
        },
        cardContent:{
            marginBottom: 8
        },
        linkText: {
            textDecoration: `none`,
            color: `white`,
            textAlign: 'center'

        }
    }
})

export default function UserCards({filteredUsers, handleDelete, handleEdit}) {
    const classes = useStyles();


    return (
        <div>
            <Grid align="center" item xs={12} sm={12} md={12}>
                <a className={classes.linkText} href="/create/user">
                    <Button variant="contained" size="large" color="secondary">Create User</Button>    
                </a>
            </Grid>
            <Grid className={classes.cardContainer} container spacing={3}>
                {
                    filteredUsers.map(user => {
                        if(user.isActive 
                            // || user.isActive == false
                            ){
                            return(  
                                <Grid key={user._id} item xs={12} sm={6} md={4}>
                                    <Card elevation={10} className={classes.card}>
                                        <CardHeader 
                                            avatar={<Avatar className={classes.userAvatar} >{user.name ? user.name[0].toUpperCase() : ' '}</Avatar>}
                                            title={<Typography variant="h6">{user.name}</Typography>}
                                            subheader={user.email}
                                        />
                
                                        <CardContent>
                                            <Typography className={classes.cardContent}><strong>City:</strong> {user.city}</Typography>
                                            <Typography className={classes.cardContent}><strong>Address:</strong> {user.address}</Typography>
                                            <Typography><strong>Phone:</strong> {user.phone}</Typography>
                                            <Typography><strong>Is Active:</strong> {user.isActive ? 'Yes' : 'No'}</Typography>
                                        </CardContent>
    
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
                                    </Card>
                                </Grid>
    
                            )
                        }

                    })
                }
            </Grid>
        </div>
    )
}
