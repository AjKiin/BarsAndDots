// Import all the components and packages that we'll need
import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

// Import other code, e.g. components, styles, etc.
import { paperStyleLP } from '../../Data/Components';

// Import the main image above the text
import logo from '../../Images/LandingLogo.png';

export default function LandingPage(){

    return(

        <div>

            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={paperStyleLP}>
                        
                        <Grid item xs={12}><img src={logo} /></Grid>

                        <Grid item xs={12}>
                            <p style={{color: "white"}}>Bars & Dots Online, based on the DOS program <i>BarsDots Pro</i>, (c) 1989-1994, by Sid Hollander<br></br>
                            This site does not currently have an SSL certificate and does not accept nor store user information<br></br>
                            This site is also generally under construction as we add new features and frequently reassess accuracy<br></br>
                            For best experience, view this site on a laptop / desktop; limited support for smartphones<br></br>
                            Questions and feedback can be sent to <br></br>
                            <b style={{color: "yellow"}}>info@mayan-calendar.com</b><br></br><br></br>
                            "In order to escape such rapidly mounting calendric chaos, the ancient Maya priests devised a simple numerical<br></br>
                            system which even today, more than two thousand years later, stands as one of the most brilliant achievements<br></br>
                            of the human mind" - Sylvanus Morley, The Ancient Maya, 1958
                            </p>
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>  

        </div>

    );

}
