// Import all the components and packages that we'll need
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

// Import the functions that we'll need
import { updateSet } from '../../../Functions/General';
import { getHaabCoeffList_SID } from '../../../Functions/CalendarRound';

// Import all the data arrays that will be used as dropdown selections
import { TZOLKIN_NAMES_SID, HAAB_NAMES_SID, TZOLKIN_COEFF_SID,
         ALLOWED_BAKTUNS_SID, ALLOWED_PIKTUNS_SID, KATUNS_DROP_SID, 
         TUNS_DROP_SID, WINALS_DROP_SID, KINS_DROP_SID, LORDS_DROP_SID 
         } from '../../../Data/CalendarRoundData';

export default function InitSeriesInput (props) {

     // First, import any of the props items we'll need
     const { calcSet, names } = props;

    // Next, define some local variables and how to set them
    const [ piktuns, setPiktuns ] = useState(11);
    const [ baktuns, setBaktuns ] = useState(0);
    const [ katuns,  setKatuns  ] = useState(0);
    const [ tuns,    setTuns    ] = useState(0);
    const [ winals,  setWinals  ] = useState(0);
    const [ kins,    setKins    ] = useState(0);
    const [ tzolkinCoefficient, setTCoeff ] = useState(0);
    const [ tzolkinName,        setTName ] = useState(0);
    const [ haabCoefficient,    setHCoeff ] = useState(0);
    const [ haabName,           setHName ] = useState(0);
    const [ lords, setLords ] = useState(0);


    // Handle all the state variable changes; in every case, recalculate the set of LCDs to return
    // Start with the long count pieces
    function handlePiktunChange (event) {
        setPiktuns(event.target.value);
        calcSet( updateSet( event.target.value, baktuns, katuns, tuns, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleBaktunChange (event) {
        setBaktuns(event.target.value);
        calcSet( updateSet( piktuns, event.target.value, katuns, tuns, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleKatunChange (event) {
        setKatuns(event.target.value);
        calcSet( updateSet( piktuns, baktuns, event.target.value, tuns, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleTunChange (event) {
        setTuns(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, event.target.value, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleWinalChange (event) {
        setWinals(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, event.target.value, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleKinChange (event) {
        setKins(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, event.target.value, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, lords));
    }


    // Now work on the calendar round pieces
    function handleTzolkinCoefficientChange (event) {
        setTCoeff(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, kins, event.target.value, tzolkinName, haabCoefficient, haabName, lords));
    }

    function handleTzolkinNameChange (event) {
        setTName(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, kins, tzolkinCoefficient, event.target.value, haabCoefficient, haabName, lords));
    }

    function handleHaabCoefficientChange (event) {
        setHCoeff(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, kins, tzolkinCoefficient, tzolkinName, event.target.value, haabName, lords));
    }

    function handleHaabNameChange (event) {
        setHName(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, event.target.value, lords));
    }

    // Lastly, work on the Lords of the Night entry
    function handleLordsChange (event) {
        setLords(event.target.value);
        calcSet( updateSet( piktuns, baktuns, katuns, tuns, winals, kins, tzolkinCoefficient, tzolkinName, haabCoefficient, haabName, event.target.value));
    }



    return(

        <Grid container sx={{ alignItems: "center" }}>

            <Grid size={{ xs: 12, md: 12 }}>
                <Grid container>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="piktun" htmlFor="piktun-select">Piktuns</InputLabel>
                            <Select 
                                inputProps={{ id: 'piktun-select' }}
                                value={piktuns} 
                                onChange={(event) => handlePiktunChange(event)}
                                labelid="piktun"
                                label="Piktuns"
                            >
                                {/* Here we need to restrict piktuns based on baktun selection */}
                                {ALLOWED_PIKTUNS_SID[baktuns].Coefficients.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="baktun" htmlFor="baktun-select">Baktuns</InputLabel>
                            <Select 
                                inputProps={{ id: 'baktun-select' }}
                                value={baktuns} 
                                onChange={(event) => handleBaktunChange(event)}
                                labelid="baktun"
                                label="Baktuns"
                            >
                                {/* Here we need to restrict baktuns to 0-12 in case piktuns = 19, otherwise it can be 0-19 */}
                                {ALLOWED_BAKTUNS_SID[piktuns].Coefficients.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="katun" htmlFor="katun-select">Katuns</InputLabel>
                            <Select 
                                inputProps={{ id: 'katun-select' }}
                                value={katuns} 
                                onChange={(event) => handleKatunChange(event)}
                                labelid="katun"
                                label="Katuns"
                            >
                                {KATUNS_DROP_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="tun" htmlFor="tun-select">Tuns</InputLabel>
                            <Select 
                                inputProps={{ id: 'tun-select' }}
                                value={tuns} 
                                onChange={(event) => handleTunChange(event)}
                                labelid="tun"
                                label="Tuns"
                            >
                                {TUNS_DROP_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="winal" htmlFor="winal-select">Winals</InputLabel>
                            <Select 
                                inputProps={{ id: 'winal-select' }}
                                value={winals} 
                                onChange={(event) => handleWinalChange(event)}
                                labelid="winal"
                                label="Winals"    
                            >
                                {WINALS_DROP_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="kin" htmlFor="kin-select">Kins</InputLabel>
                            <Select 
                                inputProps={{ id: 'kin-select' }}
                                value={kins} 
                                onChange={(event) => handleKinChange(event)}
                                labelid="kin"
                                label="Kins"
                            >
                                {KINS_DROP_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            {/* Now we list the calendar round and Lords of the Night dropdowns */}

            <Grid size={{ xs: 12, md: 12 }}>
                <Grid container>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="TN" htmlFor="tzolnum-select">Tzolk'in Number</InputLabel>
                            <Select 
                                inputProps={{ id: 'tzolnum-select' }}
                                value={tzolkinCoefficient} 
                                onChange={(event) => handleTzolkinCoefficientChange(event)}
                                labelid="TN"
                                label="Tzolk'in Number"
                            >
                                {TZOLKIN_COEFF_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="TM" htmlFor="tzolname-select">Tzolk'in Name</InputLabel>
                            <Select 
                                inputProps={{ id: 'tzolname-select' }}
                                value={tzolkinName} 
                                onChange={(event) => handleTzolkinNameChange(event)}
                                labelid="TM"
                                label="Tzolk'in Name"
                            >
                                {/* No restrictions on this one */}
                                {TZOLKIN_NAMES_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name[names]}</MenuItem>)
                                })}

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="HN" htmlFor="haabnum-select">Haab Number</InputLabel>
                            <Select 
                                inputProps={{ id: 'haabnum-select' }}
                                value={haabCoefficient} 
                                onChange={(event) => handleHaabCoefficientChange(event)}
                                labelid="HN"
                                label="Haab Number"
                            >
                                {/* Here we need to restrict Haab coefficients depending on Tzolkin day name, if one is chosen
                                    We also need to restrict Haab coefficients depending on Haab month name, i.e. Uayeb */}
                                {/* Previously we had...
                                    HAAB_COEFF_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })*/}

                                {getHaabCoeffList_SID(tzolkinName, haabName).map((name, index) => {
                                        return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                    })
                                }
                                

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="HM" htmlFor="haabname-select">Haab Name</InputLabel>
                            <Select 
                                inputProps={{ id: 'haabname-select' }}
                                value={haabName} 
                                onChange={(event) => handleHaabNameChange(event)}
                                labelid="HM"
                                label="Haab Name" 
                            >
                                {/* No restrictions are placed here */} 
                                {HAAB_NAMES_SID.map((name, index) => {
                                return (<MenuItem value={index} key={index}>{name[names]}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="lord" htmlFor="lords-select">Lord of the Night</InputLabel>
                            <Select 
                                inputProps={{ id: 'lords-select' }}
                                value={lords} 
                                onChange={(event) => handleLordsChange(event)}
                                labelid="lord"
                                label="Lord of the Night"
                            >
                                {LORDS_DROP_SID.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    );

}

InitSeriesInput.propTypes = {
    calcSet: PropTypes.func.isRequired,
    names: PropTypes.string.isRequired,
};
