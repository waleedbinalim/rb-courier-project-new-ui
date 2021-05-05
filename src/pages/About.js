import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return{
        cardContainer: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        faqUl: {

        },
        faqLi: {
            color: '#5b5b5bff',
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
                            <li className={classes.faqLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
