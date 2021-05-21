import React ,{useContext} from 'react'
import { useHistory , NavLink } from "react-router-dom";
import {AppBar , Toolbar, Avatar} from '@material-ui/core'
import {List , ListItem , ListItemText , IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core'
import {navLinks , logout} from '../constants/Constants'
import {AuthContext} from '../state/auth/AuthContext'

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
    const history = useHistory();

    const {isLoggedIn , setIsLoggedIn} = useContext(AuthContext);


    const handleLogout = async () => {
        const logOut = await fetch(logout , {credentials: 'include'} )
        const loggedOut = await logOut.json();
        console.log(loggedOut)
        setIsLoggedIn(false)
        history.push('/')
    }

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
                                    <NavLink to={link.path} key={link.title} className={classes.linkText}>
                                        <ListItem button>
                                            <ListItemText primary={link.title}  />
                                        </ListItem>
                                    </NavLink>
                                )
                            })}
                        </List >
                            <List className={classes.auth}>
                                        <NavLink to="/login" className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary="Login"  />
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to="/signup" className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary="Sign Up"  />
                                            </ListItem>
                                        </NavLink>

                                        <div className={classes.linkText} onClick={() => {handleLogout()}}>
                                        <ListItem button>
                                            <ListItemText primary="Log Out"  />
                                        </ListItem>
                                        </div>

                            </List>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
