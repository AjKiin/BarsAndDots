// Import various components that we'll need
import * as React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Settings, Help, Info, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

// Import the main image above the text
import logo from '../../Images/LandingLogo.png';

// Import all the functions that we'll need
import { getLCValues, getLCString, buildLCString } from '../../Functions/General';
import { lcdToCRInfo, getTzolkPos, getHaabPos, getCRPos, yearCountData, getGodNum, getDeterminant, crString } from '../../Functions/CalendarRound';
import { getMoonAge, getLunarInfo, lcdTo3Planets, getMonthSize } from '../../Functions/Astronomy';
import { getJDNFromLCD, getJDNDateString, jdnToDate } from '../../Functions/JulianDayNumber';
import { getLast819Station, getPlaceIn819Cycle, getNumStations } from '../../Functions/819DayStation';

// Import the various data arrays we might need
import { TZOLKIN_NAMES, HAAB_NAMES, DIRECTIONS, COLORS, FORECAST, TZOLKIN_COEFFICIENTS } from '../../Data/CalendarRoundData';

const paperStyle = {
    backgroundColor: '#2c2e2d', //#cccccc
    textAlign: 'center', 
    marginTop: '15px',
    paddingTop: '10px',
    paddingBottom: '5px',
}

export default function LandingPage() {

    /*
    let lcd = 10123890;
    let names = 'yucatecan';
    let correlation = 584283;

    // Need to perform some calculations first before we can return the content
    let lc = getLCValues(lcd);
    let cr = lcdToCRInfo(lcd);
    let yearCount = yearCountData(getTzolkPos(cr.tzolkinCoefficient, cr.tzolkinName), getHaabPos(cr.haabCoefficient, cr.haabName), names);
    let god = getGodNum(lc.winals, lc.kins);
    let moonAge = getMoonAge(lcd, correlation);
    let jdn = getJDNFromLCD(lcd, correlation);
    let determinant = getDeterminant(lcd);
    let flipDeterminant = -determinant;
    let station = getLast819Station(lcd);
    let stationLC = getLCValues(station);
    let lunarInfo = getLunarInfo(lcd, moonAge, correlation);
    let diffLC = getLCValues(lcd - station);
    */

    return(
        <div>
            <Grid container>
                <Grid size={{ xs: 12 }}>
                    <Paper sx={paperStyle}>
                        
                        <Grid size={{ xs: 12 }}><img src={logo} /></Grid>

                        <Grid size={{ xs: 12 }}>

                            <section className="welcome">
                                <h2 style={{color: "white"}}>Welcome to the Ancient Mayan Calendar</h2>
                                <p style={{color: "white"}}>Bars & Dots Online, based on the DOS program <i>BarsDots Pro</i>, (c) 1989-1994, by Sid Hollander<br></br>
                                For best experience, view this site on a laptop / desktop; limited support for smartphones<br></br>
                                Questions and feedback can be sent to
                                <b style={{color: "yellow"}}> info@mayan-calendar.com</b><br></br>
                                This site does not accept nor store user information<br></br>
                                </p>
                                <h2 style={{color: "white"}}>Instructions</h2>
                                <p style={{color: "white"}}>First, click the settings icon <IconButton color="inherit"><Settings /></IconButton> and set correlation factor and naming convention.<br></br>
                                Next, click the menu icon <IconButton color="inherit"><Menu /></IconButton> in the upper right to navigate to different pages<br></br>
                                Note that refreshing/reloading the browser page will return correlation / naming settings to default<br></br>
                                For help and a list of assumptions used in our calculations, click <IconButton color="inherit"><Help /></IconButton> to see a list<br></br>
                                For information on the site concept and contributors, click the <IconButton color="inherit"><Info /></IconButton> icon
                                </p>
                            </section>

                            <section className="calculator-introduction">
                                <h2 style={{color: "white"}}>Understanding the Maya Calendar Results</h2>
                                <p style={{color: "white"}}> Bars and Dots is an interactive Maya calendric calculator for exploring<br></br>
                                the interconnected systems used to record and express dates in the ancient<br></br>
                                Maya world. Enter a modern or Maya date to examine its relationship to the<br></br>
                                Long Count, Tzolk'in, Haab', Calendar Round and other calendric cycles.<br></br>
                                </p>
                                <p style={{color: "white"}}> The calculator is designed as both a research tool and an educational<br></br>
                                resource. Its detailed display allows students, researchers and anyone<br></br>
                                interested in Maya chronology to explore how multiple calendric systems<br></br>
                                combine to describe a single date.<br></br>
                                </p>
                                <p style={{color: "white"}}> A Maya date can contain information from several overlapping systems<br></br>
                                    rather than a single calendar. Bars and Dots displays those relationships<br></br>
                                    together so that a date can be examined through Long Count notation,<br></br>
                                    ritual and solar calendar cycles, and additional calendric calculations.<br></br>
                                </p>
                            </section>

                            <section className="mec-network">
                                <h2 style={{color: "white"}}>Explore More from the Maya Exploration Center</h2>
                                <p style={{color: "white"}}> Bars and Dots is part of a collection of Maya research, education and<br></br>
                                    exploration resources associated with the Maya Exploration Center.<br></br>
                                </p>
                                <a href="https://www.mayaexploration.org/"    style={{color: "yellow"}}>Maya Exploration Center</a><br></br>
                                <a href="https://www.mayan-calendar.com/"     style={{color: "yellow"}}>Mayan Calendar</a><br></br>
                                <a href="https://www.archaeoed.com/"          style={{color: "yellow"}}>ArchaeoEd Podcast</a><br></br>
                                <a href="https://www.ancientexploration.com/" style={{color: "yellow"}}>Ancient Explorations</a>
                            </section>

                        </Grid>

                    </Paper>
                </Grid>
            </Grid>                   
        </div>
    );
}