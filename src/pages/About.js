import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return{
        cardContainer: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        faqLi: {
            color: '#5b5b5bff',
        },
        faqP: {
            color: '#5b5b5bff'
        },
        faqHeading:{
            color: '#5b5b5bff',
        }
    }
})

export default function About() {
    const classes = useStyles()
    return (
        <div>
            <div className="about-page">
                <Grid container spacing={2} className={classes.cardContainer}>            
                        <Grid item md={12} >
                            <Typography className={classes.faqHeading} variant="h3" component="h3" align="center">FREQUENTLY ASKED QUESTIONS</Typography>
                        </Grid>             
                    <Grid item md={12} sm={12} xs={12}>
                        <ul className={classes.faqUl}>
                            <li className={classes.faqLi}><strong>Q: I DON’T HAVE A TRACKING NUMBER. WHAT DO I DO?</strong></li>
                            <p className={classes.faqP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li className={classes.faqLi}><strong>Q: DOES YOUR SERVICE DELIVER ON WEEKENDS?</strong></li>
                            <p className={classes.faqP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li className={classes.faqLi}><strong>Q: CAN I CHANGE MY DELIVERY ADDRESS ONCE IT HAS SHIPPED?</strong></li>
                            <p className={classes.faqP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li className={classes.faqLi}><strong>Q: LDOES LASERSHIP DELIVER AMAZON PACKAGES?</strong></li>
                            <p className={classes.faqP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
