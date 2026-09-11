// Import components and other support libraries
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Settings, Help, Info, Menu } from '@mui/icons-material';
import { Grid, Drawer, List, ListItemText, ListItemButton, Typography, IconButton, AppBar, Toolbar } from '@mui/material';

// Import the banner image to use on the nav bar
import BannerImage from '../Images/Banner.png';

// Import the various pages that we will navigate to
import DateDiffs from          '../Pages/DateDiffs/DateDiffs';
import CalendarCore from       '../Pages/CalendarDisplay/CalendarCore';
import DataLines from          '../Pages/DataLines/DataLines';
import DistanceArithmetic from '../Pages/DistanceArithmetic/DistanceArithmetic';
import Incomplete from         '../Pages/IncompleteDates/Incomplete';
import TemporalCycles from     '../Pages/TemporalCycles/TemporalCycles';
import DayStations from        '../Pages/DayStations/DayStations';
import MayaNumerology from     '../Pages/MayaNumerology/MayaNumerology';
import SerpentNumbers from     '../Pages/SerpentNumbers/SerpentNumbers';
import RingNumbers from        '../Pages/RingNumbers/RingNumbers';
import DeepTime from           '../Pages/DeepTime/DeepTime';

// Import the pop-up pages, or "top dots"
import SettingsTab from        '../Pages/TopDots/Settings';
import HelpTab from            '../Pages/TopDots/Help';
import InfoTab from            '../Pages/TopDots/Info';

// Import functions
import { getLCDFromJDN, changeToJDN } from '../Functions/JulianDayNumber';

// Import other code, e.g. components, styles, etc.
import { navStyle, bannerStyle, dotStyle } from '../Data/Components';

// Add style to the link text in the drawer list
const listItemStyle = {
  fontSize:'17px',  // Font size for list items in the drawer
  color: '#cfcfcf', // Set the link text color
}

export default function Navigation(){

  // Create state hooks that can be updated
  // These two are the most important, and only, site settings that need to propagate to almost every downstream page
  const [correlation, setCorrelation] = useState(584283);
  const [names, setNames] = useState('yucatec');

  // Create variables that control the main display and drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  let lcd = getLCDFromJDN(changeToJDN(new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()), correlation)
  const [content, setContent] = useState( <CalendarCore correlation={correlation} names={names} lcd={lcd} /> );
  
  const handleClose = (event, reason) => {
    // If the user clicked outside the drawer, close it
    if (reason === 'backdropClick') {
      setDrawerOpen(false);
    }
  };

  return(

    <div>

      {/* This is the fixed bar on top that never moves, with banner, title, "top dots" and hamburger menu */}
      <AppBar position="static" sx={{ bgcolor: '#042104' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          {/* The nav bar is like a sandwich of elements, evenly spread out: image | title | top dots */}

            <Grid size={{ md: 3, xs: 3 }}>
              <Paper sx={ bannerStyle }>
                <img src={ BannerImage } alt="Banner of codex with numbers" />
              </Paper>
            </Grid>

            <Grid size={{ md: 4, xs: 4 }}>
              <Paper sx={ navStyle }>
                <Typography variant="h4" style={{ color: '#ebeb00' }}><b>Bars and Dots</b></Typography>
              </Paper>
            </Grid>

            <Grid size={{ md: 4, xs: 4 }}>
              <Paper sx={ dotStyle }>
                <IconButton onClick={ () => setInfoOpen(true)     } sx={{ color: '#ffffff' }}><Info /></IconButton>
                <IconButton onClick={ () => setHelpOpen(true)     } sx={{ color: '#ffffff' }}><Help /></IconButton>
                <IconButton onClick={ () => setSettingsOpen(true) } sx={{ color: '#ffffff' }}><Settings /></IconButton>
                <IconButton onClick={ () => setDrawerOpen(true)   } sx={{ color: '#ffffff' }}><Menu /></IconButton>
              </Paper>
            </Grid>

        </Toolbar>
      </AppBar>


      {/* This is the drawer that will slide out when the hamburger menu icon is clicked in the above toolbar */}
      <Drawer
        anchor="right" // Open the drawer from the right side, cannot be swiped though
        open={drawerOpen} // Whether or not it's open is controlled by boolean
        onClose={handleClose} // This will close the drawer when you click outside the drawer
        slotProps={{ paper: { sx: { backgroundColor: "#d8d6d6" } }} } // Set the background color in the drawer itself
      >
        <div>
          <List>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <CalendarCore correlation={correlation} names={names} /> ) }}>
              <ListItemText primary="Interactive Calendar" slotProps={{ primary: listItemStyle }} />
            </ListItemButton> 

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <DataLines correlation={correlation} names={names}/> ) }}>
              <ListItemText primary="Data Lines" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <DistanceArithmetic correlation={correlation} names={names}/> ) }}>
              <ListItemText primary="Distance Arithmetic" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <Incomplete correlation={correlation} names={names}/> ) }}>
              <ListItemText primary="Solve Incomplete Dates" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <TemporalCycles correlation={correlation}/> ) }}>
              <ListItemText primary="Temporal Cycles" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <MayaNumerology /> )} }>
              <ListItemText primary="Maya Numerology" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>     

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <DateDiffs correlation={correlation} names={names} /> ) } }>
              <ListItemText primary="Date Differences" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <DayStations names={names}/> ) }} >
              <ListItemText primary="819 Day Stations" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <SerpentNumbers correlation={correlation} names={names} /> ) }} >
              <ListItemText primary="Serpent Numbers" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <RingNumbers correlation={correlation} names={names} /> ); }} >
              <ListItemText primary="Ring Numbers" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

            <ListItemButton onClick={() => { setDrawerOpen(false); setContent( <DeepTime names={names} /> ) }}>
              <ListItemText primary="Deep Time" slotProps={{ primary: listItemStyle }} />
            </ListItemButton>

          </List>
        </div>
      </Drawer>

      {/* This is the main content of the screen, showing component pages */}
      <main>
        {content}
      </main>

      {/* Top dot items go here to handle changes related to these pop-ups */}
      <SettingsTab 
        open={settingsOpen}
        correlation={correlation}
        names={names}
        setCorrelation={setCorrelation}
        setNames={setNames}
        setSettingsOpen={setSettingsOpen}
        setContent={setContent}
      />

      <HelpTab open={helpOpen} setHelpOpen={setHelpOpen} /> 
      <InfoTab open={infoOpen} setInfoOpen={setInfoOpen} />

    </div>
  );
}
