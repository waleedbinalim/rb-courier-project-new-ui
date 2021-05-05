import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return{
        cardContainer: {
            padding: theme.spacing(6),

            
        },
        text: {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
            '@media(maxWidth: 991px)' : {
               fontSize: 240
             },
        },
        subheading: {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
            paddingTop: '0px',
            paddingBottom: '8px'
        },
        homeText: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 580,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 20
        },
        homeHeading:{
            color: '#5b5b5bff',
            fontWeight: 600,
            fontSize: 48,
            lineHeight: '56px',
            [theme.breakpoints.down('md')]: {
                fontSize: 32,
                lineHeight: '40px'
              },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
                lineHeight: '32px'
              },
        },
        headingText: {
            lineHeight: '26px',
            fontFamily: 'Open Sans',
            fontWeight: 500,
            fontSize: '18px',
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
                lineHeight: '24px'
              },
        }
    }
})

export default function Home() {
    const classes = useStyles()
    return (
        <div>
                <div className="home-image-wrapper">
                    <div className={classes.homeText}>
                        <Typography variant="h3" className={classes.text}>Welcome</Typography>
                        <Typography variant="h5" className={classes.subheading}>Providing better services</Typography>
                        <Typography variant="p" className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam ducimus cupiditate magni esse delectus repellat eveniet praesentium quasi veritatis? Quis hic dolor, reiciendis impedit nam id beatae voluptas ad, non, libero voluptate eos?</Typography>
                    </div>
                </div>
           <section>
               <Grid className={classes.cardContainer} container spacing={4}>
                    <Grid item md={12} sm={12} xs={12} >
                        <Typography className={classes.homeHeading} variant="h4" component="h4" align="center">LAST MILE DELIVERY SERVICE</Typography>
                    </Grid>             
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <div className="home-text-image">
                           <img src="https://images.pexels.com/photos/4246095/pexels-photo-4246095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                       </div>
                   </Grid>
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <Typography className={classes.headingText} variant="subtitle1">
                        You deserve a great delivery experience. You want your favorite products delivered to you fast, 
                        with free shipping and no hassles.
                        We help leading and emerging internet retailers get you what you want. Whether we’re delivering 
                        your meal kits to help you quickly prepare dinner, or helping you avoid a last-minute trip to the 
                        store, our goal is to give you more time for what’s important by delivering your favorite products
                        to you — fast.
                       </Typography>
                   </Grid>
               </Grid>
           </section>
           <section>
               <Grid className={classes.cardContainer} container spacing={4}>
                    <Grid item md={12} >
                        <Typography className={classes.homeHeading} variant="h3" component="h3" align="center" >CONNECTING YOU WITH PRODUCTS</Typography>
                    </Grid>             
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <Typography className={classes.headingText} variant="body1">
                        You deserve a great delivery experience. You want your favorite products delivered to you fast, 
                        with free shipping and no hassles.
                        We help leading and emerging internet retailers get you what you want. Whether we’re delivering 
                        your meal kits to help you quickly prepare dinner, or helping you avoid a last-minute trip to the 
                        store, our goal is to give you more time for what’s important by delivering your favorite products
                        to you — fast.
                       </Typography>
                   </Grid>
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                        <div className="home-text-image">
                            <img src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </div>
                   </Grid>
               </Grid>
           </section>
           <section>
               <Grid className={classes.cardContainer} container spacing={4}>
                    <Grid item md={12} >
                        <Typography className={classes.homeHeading} variant="h3" component="h3" align="center">THE FUTURE OF LOGISTICS</Typography>
                    </Grid>   
                    <Grid item md={6} sm={12} xs={12} spacing={5}>
                        <div className="home-text-image">
                            <img src="https://images.pexels.com/photos/4506266/pexels-photo-4506266.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                        </div>
                   </Grid>          
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <Typography className={classes.headingText} variant="body1">
                       We’re developing a social platform that will allow you to select the date, time and location
                        for your deliveries. Soon, you’ll be able to rate your delivery experience — as popular ride 
                        services allow — and even send special instructions to your driver. We know that on your hectic 
                        days, time is precious, and we’re excited to continue developing customizable features for our platform, 
                        enabling us to be there when and where you need us.
                       </Typography>
                   </Grid>
               </Grid>
             
           </section>
           
        </div>
    )
}
