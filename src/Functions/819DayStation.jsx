// We need some careful definitions here to make sure we don't get confused
// An example timeline looks like this
// D---818 Days (Interval 1)---D---818 Days (Interval 2)---D---818 Days (Interval 3)---D...
// Each "D" is an LCD that marks the start of an 819-day cycle, which has a label (starting with Interval 1)
// Station = Number of an 819-cycle, completed or current (basically an interval number)
// Station Date = Date on which the 819-cycle restarts
// Note that these functions should accept negative LCDs successfully

// Function to get the LCD of the last 819 station prior to the date given
// Input is an LCD, output is an LCD
export function getLast819Station(lcd) {
    return lcd - getPlaceIn819Cycle(lcd) + 1;
}

// Function to get the LCD of the next 819 station from the date given
// Input is an LCD, output is an LCD
export function getNext819Station(lcd) {
    return lcd + (819 - getPlaceIn819Cycle(lcd)) + 1;
}

// Function to get the number of days into the 819-day cycle a given date is
// Page 139 of Maya Divine Kings of the Rain Forest (edited by Grube), Alex W. Voss states "The calendar zero date in the long count
// was placed on the 3rd day of an 819-day cycle, which coincided with the direction east and the color red."
// However, Floyd in 1976 reads "The 819-cycle begins 3 days prior to the zero date, which corresponds to 12.19.19.17.17  1 Caban 5 Cumhu"
// Adjust by 3 days since we were 3 days into a cycle at the zero date, i.e. value of 3 on 0.0.0.0.0 (LCD = 0)
// Input is an LCD, output is a number of days in this cycle (1 to 819)
export function getPlaceIn819Cycle(lcd) {
    let result = (lcd + 4) % 819;
    result = result <= 0 ? result + 819 : result;
    return result;
}

// Function to get the number of the 819-day set we are currently in
// For example, on 0.0.0.0.0 we are in Station 1
// Input is an LCD, output is an interval label for a set of 819-days
export function getNumStations(lcd) {
    return Math.floor((lcd + 4) / 819) + 1;
}

// Function to get the Tzolkin coefficient, day name and number of days into the 260-day
// cycle the given Mayan day number (or lcd) is
export function getTzolkin819(lcd) {
    let tzolkPos = (lcd + 160) % 260;
    let tzolkCoef = (tzolkPos + 1) % 13;
    let tzolkDayName = (tzolkPos + 1) % 20;
    return {
        position: tzolkPos,
        coefficient: tzolkCoef,
        dayName: tzolkDayName,
    };
}

// Function to get the haab month, day and number of days into the 365-day
// cycle the given Mayan day number (or lcd) is
export function getHaab819(lcd) {
    let haabPos = (lcd + 348) % 365;
    let haabMonth = Math.floor(haabPos / 20);
    let haabDay = haabPos % 20;
    return {
        position: haabPos,
        month: haabMonth,
        day: haabDay,
    };
}



