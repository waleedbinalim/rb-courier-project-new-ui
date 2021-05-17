import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Appbar from './Appbar'
import {makeStyles, Container, BottomNavigation, Typography, Drawer, List, ListItem, ListItemText} from '@material-ui/core'
import {ListItemIcon} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {menuItems} from '../constants/Constants'
import styled from 'styled-components'

const Footer = styled(BottomNavigation)`
    background: #3f51b5;
    color: #fff;
    min-height: 30px;
    padding: 8px 16px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const MainPage = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 15px;
`;
const HamburgerMenuItems = styled(ListItem)`
    width: 100%;
    text-align: center;
    border-bottom: solid 1px #cccc;
    &:last-child {
        border-bottom: none;
    }
`;

const useStyles = makeStyles((theme) => {
    return{
      toolbar: theme.mixins.toolbar,
      drawerPaper:{
        width: '100%',
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
            <Drawer anchor="top" variant="persistent" open={open} elevation={0} classes={{paper: classes.drawerPaper}}>
                <ListItem button  onClick={openDrawer}>
                    <ListItemIcon>
                        <ArrowBackIcon/>
                    </ListItemIcon>
                </ListItem>
                <List>
                    {menuItems.map(item => {
                        return(
                            <>
                                <HamburgerMenuItems  button key={item.title} onClick={() => drawerLink(item.path) }>
                                    <ListItemText primary={item.title} />
                                </HamburgerMenuItems>
                            </>
                        )
                    })}
                </List>
            </Drawer>

            <Container>
                <div className={classes.toolbar}></div>
                <MainPage>
                    {children}
                </MainPage>
            </Container>
            <br/>
            <Footer>
                <Typography>&copy;2021, CourierServices.com</Typography>
            </Footer>
        </div>
    )
}
