import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'

const ParentGrid = styled(Grid)`
    padding: 18px;
`;
const HeadingText = styled(Typography)`
    line-height: 26px;
    font-family: 'Open Sans';
    font-weight: 500;
    font-size: 18px;
    text-align: justify;
    @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const Heading = styled(Typography)`
    color: #5b5b5bff;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
    }

`;
const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    color: #fff;
`;
const WelcomeHeading = styled(Typography)`
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    @media (max-width: 600px) {
    font-size: 48px;
    line-height: 60px;
  }
`;
const WelcomeSubHeading = styled(Typography)`
    font-weight: 600;
    text-align: center;
    padding: 0px 0px 8px 0px;
    line-height: 30px;
`;
const WelcomeText = styled(Typography)`
    font-weight: 600;
    text-align: center;
`;


export default function Home() {
    return (
        <div>
                <div className="home-image-wrapper">
                    <HomeTextContainer>
                        <WelcomeHeading>Welcome</WelcomeHeading>
                        <WelcomeSubHeading variant="h5">Providing better services</WelcomeSubHeading>
                        <WelcomeText variant="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Nostrum ipsam ducimus cupiditate magni esse delectus repellat eveniet praesentium quasi veritatis? 
                           Quis hic dolor, reiciendis impedit nam id beatae voluptas ad, non, libero voluptate eos?
                        </WelcomeText>
                    </HomeTextContainer>
                </div>
           <section>
               <ParentGrid container spacing={4}>
                    <Grid item md={12} sm={12} xs={12} >
                        <Heading variant="h4" component="h4" align="center">LAST MILE DELIVERY SERVICE</Heading>
                    </Grid>             
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <div className="home-text-image">
                           <img src="https://images.pexels.com/photos/4246095/pexels-photo-4246095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                       </div>
                   </Grid>
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <HeadingText>
                        You deserve a great delivery experience. You want your favorite products delivered to you fast, 
                        with free shipping and no hassles.
                        We help leading and emerging internet retailers get you what you want. Whether we’re delivering 
                        your meal kits to help you quickly prepare dinner, or helping you avoid a last-minute trip to the 
                        store, our goal is to give you more time for what’s important by delivering your favorite products
                        to you — fast. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                       </HeadingText>
                   </Grid>
               </ParentGrid>
           </section>
           <section>
               <ParentGrid container spacing={4}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Heading variant="h3" component="h3" align="center" >CONNECTING YOU WITH PRODUCTS</Heading>
                    </Grid>             
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <HeadingText>
                       PaKourier operates within the largest and fastest growing metro areas in the eastern United States. 
                       Our 60+ operational facilities and four sorting hubs are staffed by people who take pride in supporting 
                       you with consistent performance, and are excited to be a part of the newly-emerging and sophisticated 
                       logistics economy. LaserShip parcels are brought to you by people with a passion for improving the delivery 
                       experience. Many have made a career as delivery professionals, others may deliver as a supplemental job, and 
                       some are gig-economy millennials delivering parcels throughout their busy schedules.
                       </HeadingText>
                   </Grid>
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                        <div className="home-text-image">
                            <img src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </div>
                   </Grid>
               </ParentGrid>
           </section>
           <section>
               <ParentGrid container spacing={4}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Heading variant="h3" component="h3" align="center">THE FUTURE OF LOGISTICS</Heading>
                    </Grid>   
                    <Grid item md={6} sm={12} xs={12} spacing={5}>
                        <div className="home-text-image">
                            <img src="https://images.pexels.com/photos/4506266/pexels-photo-4506266.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                        </div>
                   </Grid>          
                   <Grid item md={6} sm={12} xs={12} spacing={5}>
                       <HeadingText>
                       We’re developing a social platform that will allow you to select the date, time and location
                        for your deliveries. Soon, you’ll be able to rate your delivery experience — as popular ride 
                        services allow — and even send special instructions to your driver. We know that on your hectic 
                        days, time is precious, and we’re excited to continue developing customizable features for our platform, 
                        enabling us to be there when and where you need us. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                       </HeadingText>
                   </Grid>
               </ParentGrid>
             
           </section>
           
        </div>
    )
}
