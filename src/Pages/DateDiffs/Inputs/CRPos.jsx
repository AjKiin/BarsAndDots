// Import all the components and packages that we'll need
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Select, MenuItem, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

// Import all the functions we'll use
import { getTzolkPos, getHaabPos, getCRPos, crString, getHaabCoeffList } from '../../../Functions/CalendarRound';

// Import all the data arrays that we'll need
import { TZOLKIN_NAMES, TZOLKIN_COEFFICIENTS, ALLOWED_HAAB_NAMES, POSSIBLE_HAAB_COEFFICIENTS } from '../../../Data/CalendarRoundData';

export default function CRPos(props) {

    // First, import any of the props items we'll need
    const { names } = props;

    // Next, define all the local variables and ways to change them
    const [ tzolkinCoefficient,  setTCoeff ] = useState(1);
    const [ tzolkinName,         setTName  ] = useState(0);
    const [ haabCoefficient,     setHCoeff ] = useState(0);
    const [ haabName,            setHName  ] = useState(0);

    // Handle changes on the first set of date part dropdowns
    function handleTzolkinCoefficientChange (event) {
        setTCoeff(event.target.value);
    }

    function handleTzolkinNameChange (event) {
        setTName(event.target.value);
        setHCoeff(POSSIBLE_HAAB_COEFFICIENTS[event.target.value].Coefficients[0]);
    }

    function handleHaabCoefficientChange (event) {
        setHCoeff(event.target.value);
    }

    function handleHaabNameChange (event) {
        setHName(event.target.value);
    }

    return(
        <Grid container>
            <Grid size={{ md: 9 }}>

                <Grid container>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="TNID" htmlFor="crp-tnum-select">Tzolk'in Number </InputLabel>
                            <Select 
                                inputProps={{ id: 'crp-tnum-select' }}
                                value={tzolkinCoefficient} 
                                onChange={(event) => handleTzolkinCoefficientChange(event)}
                                labelid="TNID"
                                label="Tzolk'in Number"
                            >
                                {/* These coefficients have no dependency on the others: no restrictions */}
                                {TZOLKIN_COEFFICIENTS.map(number => {
                                    return (<MenuItem value={number} key={number}>{number}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="TMID" htmlFor="crp-tname-select">Tzolk'in Name </InputLabel>
                            <Select 
                                inputProps={{ id: 'crp-tname-select' }}
                                value={tzolkinName} 
                                onChange={(event) => handleTzolkinNameChange(event)}
                                labelid="TMID"
                                label="Tzolk'in Name"
                            >
                                {/* We could restrict these based on Haab coefficient, but it would lead to a loop: no restrictions */}
                                {TZOLKIN_NAMES.map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name[names]}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="HDID" htmlFor="crp-haabday-select">Haab Day </InputLabel>
                            <Select 
                                inputProps={{ id: 'crp-haabday-select' }}
                                value={haabCoefficient} 
                                onChange={(event) => handleHaabCoefficientChange(event)}
                                labelid="HDID"
                                label="Haab Day"
                            >
                                {/* Here we need to restrict Haab coefficients depending on Tzolkin day name, if one is chosen
                                    We also need to restrict Haab coefficients depending on Haab month name, i.e. Uayeb */}
                                {getHaabCoeffList(tzolkinName, haabName).map((name, index) => {
                                    return (<MenuItem value={index} key={index}>{name}</MenuItem>)
                                })}
                            </Select>
                            </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="HMID" htmlFor="crp-haabmonth-select">Haab Month </InputLabel>
                            <Select 
                                inputProps={{ id: 'crp-haabmonth-select' }}
                                value={haabName} 
                                onChange={(event) => handleHaabNameChange(event)}
                                labelid="HMID"
                                label="Haab Month"
                            >
                                {/* Here we need to restrict Haab month name based on coefficient
                                    If the coefficient is known and >4, then Uayeb is not an option */}
                                {ALLOWED_HAAB_NAMES[haabCoefficient].Coefficients.map((name, index) => {
                                return (<MenuItem value={index} key={index}>{name[names]}</MenuItem>)
                                })}
                            </Select>
                            </FormControl>
                    </Grid>

                </Grid>

            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                {crString({
                    tzolkinCoefficient: tzolkinCoefficient - 1,
                    tzolkinName: tzolkinName,
                    haabCoefficient: getHaabCoeffList(tzolkinName, haabName)[haabCoefficient],
                    haabName: haabName,
                }, names)} is Day {getCRPos(getTzolkPos(tzolkinCoefficient - 1, tzolkinName), 
                        getHaabPos(getHaabCoeffList(tzolkinName, haabName)[haabCoefficient], haabName))} of the 18,980 calendar round cycle
            </Grid>
            
        </Grid>
    );

}

CRPos.propTypes = {
    names: PropTypes.string.isRequired,
}
