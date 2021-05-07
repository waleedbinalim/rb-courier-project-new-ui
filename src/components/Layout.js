import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Appbar from './Appbar'
import {makeStyles, Container, BottomNavigation, Typography, Drawer, List, ListItem, ListItemText} from '@material-ui/core'
import {ListItemIcon} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const menuItems = [
    {title: 'HOME' , path: '/'},
    {title: 'USERS' , path: '/users'},
    {title: 'ORDERS' , path: '/orders'},
    {title: 'ABOUT' , path: '/about'},
    {title: 'CONTACT' , path: '/contact'},
    {title: 'LOGIN' , path: '/'},
    {title: 'SIGN UP' , path: '/'},
]


const useStyles = makeStyles((theme) => {
    return{
      toolbar: theme.mixins.toolbar,
      page: {
          width: '100%',
          minHeight: '100vh',
          paddingTop: theme.spacing(5)
          
      },
      drawer: {
          width: '100%',
          textAlign: 'center',
          borderBottom: 'solid 1px #cccc',
          '&:last-child': {
            borderBottom: 'none'
          }
          
      },
      drawerPaper:{
        width: '100%',
      },
      footer: {
          background: '#3f51b5',
          color: '#fff',
          minHeight: 30,
          padding: '8px 16px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'

      },
      footerText: {
          color: '#fff',
          padding: 0,
          textAlign: 'center',
          fontSize: 14
      },
      backButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(3)
      },

    }
  })


export default function Layout({children}) {
    let [open , setOpen] = useState(false)
    const classes= useStyles()
    const history = useHistory()

    let openDrawer = () => {
        setOpen(!open)
    }

    let drawerLink = (path) => {
        setOpen(!open)
        history.push(path)
    }

    return (
        <div>
            <Appbar openDrawer={openDrawer}/>
            <Drawer className={classes.drawer} anchor="top" variant="persistent" open={open} elevation={0} classes={{paper: classes.drawerPaper}}>
                <ListItem button  onClick={openDrawer}>
                    <ListItemIcon>
                        <ArrowBackIcon/>
                    </ListItemIcon>
                </ListItem>
                <List>
                    {menuItems.map(item => {
                        return(
                            <>
                                <ListItem className={classes.drawer}  button key={item.title} onClick={() => drawerLink(item.path) }>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </>
                        )
                    })}
                </List>
            </Drawer>

            <Container>
                <div className={classes.toolbar}></div>
                <div className={classes.page}>
                    {children}
                </div>
            </Container>
            <br/>
            <BottomNavigation className={classes.footer}>
                <Typography className={classes.footerText}>&copy;2021, pakourier.pk</Typography>
            </BottomNavigation>
        </div>
    )
}
