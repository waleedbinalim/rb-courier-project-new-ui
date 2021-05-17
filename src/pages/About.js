import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import styled from 'styled-components'

const FaqContainer = styled(Grid)`
    padding: 0px 18px 0px 18px;
    color: #5b5b5bff;
`;


export default function About() {
    return (
        <div>
            <div className="about-page">
                <FaqContainer container spacing={2}>            
                        <Grid item md={12} >
                            <Typography variant="h3" component="h3" align="center">FREQUENTLY ASKED QUESTIONS</Typography>
                        </Grid>             
                    <Grid item md={12} sm={12} xs={12}>
                        <ul>
                            <li><strong>Q: I DON’T HAVE A TRACKING NUMBER. WHAT DO I DO?</strong></li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li><strong>Q: DOES YOUR SERVICE DELIVER ON WEEKENDS?</strong></li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li><strong>Q: CAN I CHANGE MY DELIVERY ADDRESS ONCE IT HAS SHIPPED?</strong></li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <li><strong>Q: LDOES LASERSHIP DELIVER AMAZON PACKAGES?</strong></li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                        </ul>
                    </Grid>
                </FaqContainer>
            </div>
        </div>
    )
}
