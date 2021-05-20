import React from 'react'
import {AppBar , Toolbar, Avatar} from '@material-ui/core'
import {List , ListItem , ListItemText , IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core'
import {navLinks} from '../constants/Constants'

let useStyles = makeStyles((theme) => {
    return{
        logo: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        },
        title: {
            marginRight: theme.spacing(10)
        },
        navDisplayFlex: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        linkText: {
            textDecoration: `none`,
            color: `white`,
            textAlign: 'center'

        },
        buttonBar:{
            width: '100%',
            marginLeft: 'auto',
            [theme.breakpoints.down("sm")]: {
                display: "none"
              }
        },
        menuButton:{
            [theme.breakpoints.up("md")]: {
                display: "none"
              }

        },
        auth: {
            display: 'flex'
        }
    }
})

export default function Appbar({openDrawer}) {

    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openDrawer} >
                    <MenuIcon />
                </IconButton>
                <Avatar className={classes.logo} src="/logo.svg"></Avatar>
                <div className={classes.buttonBar}>
                    <div  className={classes.navDisplayFlex}>
                        <List  className={classes.navDisplayFlex}>
                            {navLinks.map(link => {
                                return(
                                    <a href={link.path} key={link.title} className={classes.linkText}>
                                        <ListItem button>
                                            <ListItemText primary={link.title}  />
                                        </ListItem>
                                    </a>
                                )
                            })}
                        </List >
                            <List className={classes.auth}>
                                        <a href="/login" className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary="Login"  />
                                            </ListItem>
                                        </a>
                                        <a href="/signup" className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary="Sign Up"  />
                                            </ListItem>
                                        </a>
                            </List>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
