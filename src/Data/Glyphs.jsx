// This file stores all glyph image file paths and creates exportable arrays
// that the main interactive calendar page can use to change images on demand
// Unless otherwise specified, these lists are in order and must stay that way

// ----------------- FILE PATHS ---------------------

// Declare a set of imported image objects for numbers, 21x
import glyph0 from '../Images/Glyphs/Numbers/N0.png';
import glyph1 from '../Images/Glyphs/Numbers/N1.png';
import glyph2 from '../Images/Glyphs/Numbers/N2.png';
import glyph3 from '../Images/Glyphs/Numbers/N3.png';
import glyph4 from '../Images/Glyphs/Numbers/N4.png';
import glyph5 from '../Images/Glyphs/Numbers/N5.png';
import glyph6 from '../Images/Glyphs/Numbers/N6.png';
import glyph7 from '../Images/Glyphs/Numbers/N7.png';
import glyph8 from '../Images/Glyphs/Numbers/N8.png';
import glyph9 from '../Images/Glyphs/Numbers/N9.png';
import glyph10 from '../Images/Glyphs/Numbers/N10.png';
import glyph11 from '../Images/Glyphs/Numbers/N11.png';
import glyph12 from '../Images/Glyphs/Numbers/N12.png';
import glyph13 from '../Images/Glyphs/Numbers/N13.png';
import glyph14 from '../Images/Glyphs/Numbers/N14.png';
import glyph15 from '../Images/Glyphs/Numbers/N15.png';
import glyph16 from '../Images/Glyphs/Numbers/N16.png';
import glyph17 from '../Images/Glyphs/Numbers/N17.png';
import glyph18 from '../Images/Glyphs/Numbers/N18.png';
import glyph19 from '../Images/Glyphs/Numbers/N19.png';
import glyphNull from '../Images/Glyphs/Numbers/Null.png';


// Declare a set of imported image objects for Tzolkin glyphs, 20x
import glyphImix     from '../Images/Glyphs/Tzolkin/Imix.png';
import glyphIk       from '../Images/Glyphs/Tzolkin/Ik.png';
import glyphAkbal    from '../Images/Glyphs/Tzolkin/Akbal.png';
import glyphKan      from '../Images/Glyphs/Tzolkin/Kan.png';
import glyphChicchan from '../Images/Glyphs/Tzolkin/Chicchan.png';
import glyphCimi     from '../Images/Glyphs/Tzolkin/Cimi.png';
import glyphManik    from '../Images/Glyphs/Tzolkin/Manik.png';
import glyphLamat    from '../Images/Glyphs/Tzolkin/Lamat.png';
import glyphMuluc    from '../Images/Glyphs/Tzolkin/Muluc.png';
import glyphOc       from '../Images/Glyphs/Tzolkin/Oc.png';
import glyphChuen    from '../Images/Glyphs/Tzolkin/Chuen.png';
import glyphEb       from '../Images/Glyphs/Tzolkin/Eb.png';
import glyphBen      from '../Images/Glyphs/Tzolkin/Ben.png';
import glyphIx       from '../Images/Glyphs/Tzolkin/Ix.png';
import glyphMen      from '../Images/Glyphs/Tzolkin/Men.png';
import glyphCib      from '../Images/Glyphs/Tzolkin/Cib.png';
import glyphCaban    from '../Images/Glyphs/Tzolkin/Caban.png';
import glyphEtznab   from '../Images/Glyphs/Tzolkin/Etznab.png';
import glyphCauac    from '../Images/Glyphs/Tzolkin/Cauac.png';
import glyphAhau     from '../Images/Glyphs/Tzolkin/Ahau.png';


// Declare a set of imported image objects for Haab glyphs, 19x
import glyphPop     from '../Images/Glyphs/Haab/Pop.png';
import glyphUo      from '../Images/Glyphs/Haab/Uo.png';
import glyphZip     from '../Images/Glyphs/Haab/Zip.png';
import glyphZotz    from '../Images/Glyphs/Haab/Zotz.png';
import glyphTzec    from '../Images/Glyphs/Haab/Tzec.png';
import glyphXul     from '../Images/Glyphs/Haab/Xul.png';
import glyphYaxkin  from '../Images/Glyphs/Haab/Yaxkin.png';
import glyphMol     from '../Images/Glyphs/Haab/Mol.png';
import glyphChen    from '../Images/Glyphs/Haab/Chen.png';
import glyphYax     from '../Images/Glyphs/Haab/Yax.png';
import glyphZac     from '../Images/Glyphs/Haab/Zac.png';
import glyphCeh     from '../Images/Glyphs/Haab/Ceh.png';
import glyphMac     from '../Images/Glyphs/Haab/Mac.png';
import glyphKankin  from '../Images/Glyphs/Haab/Kankin.png';
import glyphMuan    from '../Images/Glyphs/Haab/Muan.png';
import glyphPax     from '../Images/Glyphs/Haab/Pax.png';
import glyphKayab   from '../Images/Glyphs/Haab/Kayab.png';
import glyphCumku   from '../Images/Glyphs/Haab/Cumku.png';
import glyphUayeb   from '../Images/Glyphs/Haab/Uayeb.png';

// Declare a set of imported image objects for Lord of the Night glyphs, 9x
// Taken from Mark Pitts "Maya Numbers and Calendar Book 2"
import glyphLord1   from '../Images/Glyphs/Lords/Lord1.png';
import glyphLord2   from '../Images/Glyphs/Lords/Lord2.png';
import glyphLord3   from '../Images/Glyphs/Lords/Lord3.png';
import glyphLord4   from '../Images/Glyphs/Lords/Lord4.png';
import glyphLord5   from '../Images/Glyphs/Lords/Lord5.png';
import glyphLord6   from '../Images/Glyphs/Lords/Lord6.png';
import glyphLord7   from '../Images/Glyphs/Lords/Lord7.png';
import glyphLord8   from '../Images/Glyphs/Lords/Lord8.png';
import glyphLord9   from '../Images/Glyphs/Lords/Lord9.png';

// Declare a set of imported image objects for the Long Count, 6x
// Taken from Mark Pitts "Maya Numbers and Calendar Book 2"
import glyphKin      from '../Images/Glyphs/LongCount/Kin.png';
import glyphWinal    from '../Images/Glyphs/LongCount/Winal.png';
import glyphTun      from '../Images/Glyphs/LongCount/Tun.png';
import glyphKatun    from '../Images/Glyphs/LongCount/Katun.png';
import glyphBaktun   from '../Images/Glyphs/LongCount/Baktun.png';
import glyphPiktun   from '../Images/Glyphs/LongCount/Piktun.png';
import glyphKalabtun from '../Images/Glyphs/LongCount/Kalabtun.png';

// Declare a set of imported image objects for the ISIG, 18x
import glyphISIGPop     from '../Images/Glyphs/ISIG/ISIGPop.png';
import glyphISIGUo      from '../Images/Glyphs/ISIG/ISIGUo.png';
import glyphISIGZip     from '../Images/Glyphs/ISIG/ISIGZip.png';
import glyphISIGZotz    from '../Images/Glyphs/ISIG/ISIGZotz.png';
import glyphISIGTzec    from '../Images/Glyphs/ISIG/ISIGTzec.png';
import glyphISIGXul     from '../Images/Glyphs/ISIG/ISIGXul.png';
import glyphISIGYaxkin  from '../Images/Glyphs/ISIG/ISIGYaxkin.png';
import glyphISIGMol     from '../Images/Glyphs/ISIG/ISIGMol.png';
import glyphISIGChen    from '../Images/Glyphs/ISIG/ISIGChen.png';
import glyphISIGYax     from '../Images/Glyphs/ISIG/ISIGYax.png';
import glyphISIGZac     from '../Images/Glyphs/ISIG/ISIGZac.png';
import glyphISIGCeh     from '../Images/Glyphs/ISIG/ISIGCeh.png';
import glyphISIGMac     from '../Images/Glyphs/ISIG/ISIGMac.png';
import glyphISIGKankin  from '../Images/Glyphs/ISIG/ISIGKankin.png';
import glyphISIGMuan    from '../Images/Glyphs/ISIG/ISIGMuan.png';
import glyphISIGPax     from '../Images/Glyphs/ISIG/ISIGPax.png';
import glyphISIGKayab   from '../Images/Glyphs/ISIG/ISIGKayab.png';
import glyphISIGCumku   from '../Images/Glyphs/ISIG/ISIGCumku.png';
import glyphISIGUayeb   from '../Images/Glyphs/ISIG/ISIGUayeb.png';

// Declare a set of imported image objects for lettered glyphs, 5x
// Taken from Mark Pitts "Maya Numbers and Calendar Book 2"
import glyphF  from '../Images/Glyphs/Various/F.png';
import glyphD  from '../Images/Glyphs/Various/D.png';
import glyphE  from '../Images/Glyphs/Various/E.png';
import glyphC  from '../Images/Glyphs/Various/C.png';
import glyphY  from '../Images/Glyphs/Various/Y.png';

// These are from J. Montgomery "How to Read Maya Hieroglyphs"
import glyphB    from '../Images/Glyphs/Various/B.png'; 
import glyphA29  from '../Images/Glyphs/Various/A29.png';
import glyphA30  from '../Images/Glyphs/Various/A30.png';
import glyphX1   from '../Images/Glyphs/Various/X1.png';
import glyphX2   from '../Images/Glyphs/Various/X2.png';
import glyphX3   from '../Images/Glyphs/Various/X3.png';
import glyphX4   from '../Images/Glyphs/Various/X4.png';
import glyphX5   from '../Images/Glyphs/Various/X5.png';
import glyphX6   from '../Images/Glyphs/Various/X6.png';

// Declare a set of imported image objects for directions and colors, 8x
// Taken from Mark Pitts "Writing in Maya Glyphs Book 1"
import glyphEast    from '../Images/Glyphs/Directions/East.png';
import glyphNorth   from '../Images/Glyphs/Directions/North.png';
import glyphWest    from '../Images/Glyphs/Directions/West.png';
import glyphSouth   from '../Images/Glyphs/Directions/South.png';
import glyphRed     from '../Images/Glyphs/Colors/Red.png';
import glyphBlack   from '../Images/Glyphs/Colors/Black.png';
import glyphYellow  from '../Images/Glyphs/Colors/Yellow.png';
import glyphWhite   from '../Images/Glyphs/Colors/White.png';

// Declare a set of imported image objects for various assorted glyhs
import glyph819verb  from '../Images/Glyphs/Various/819verb.png';
import glyphKawil    from '../Images/Glyphs/Various/Kawil.png';
import glyphDNIG     from '../Images/Glyphs/Various/DNIG.png';
import glyphADI      from '../Images/Glyphs/Various/ADI.png';
import glyphUnknown  from '../Images/Glyphs/Various/Unknown.png';


// ----------------- DATA ARRAYS ---------------------

// NOTE: Order matters for all of the arrays below!

// Create an array to store the image object names for numbers
const numberGlyphPaths = [
    glyph0, glyph1, glyph2, glyph3, glyph4, glyph5,
    glyph6, glyph7, glyph8, glyph9, glyph10, glyph11,
    glyph12, glyph13, glyph14, glyph15, glyph16, glyph17,
    glyph18, glyph19, glyphNull,
];

// Create an array to store the image object names for Tzolkin
const tzolkinGlyphPaths = [
    glyphImix, glyphIk, glyphAkbal, glyphKan, glyphChicchan, glyphCimi,
    glyphManik, glyphLamat, glyphMuluc, glyphOc, glyphChuen, glyphEb,
    glyphBen, glyphIx, glyphMen, glyphCib, glyphCaban, glyphEtznab,
    glyphCauac, glyphAhau,
];

// Create an array to store the image object names for Haab
const haabGlyphPaths = [
    glyphPop, glyphUo, glyphZip, glyphZotz, glyphTzec, glyphXul, glyphYaxkin,
    glyphMol, glyphChen, glyphYax, glyphZac, glyphCeh, glyphMac, glyphKankin,
    glyphMuan, glyphPax, glyphKayab, glyphCumku, glyphUayeb,
];

// Create an array to store the image object names for Lords of the Night
const lordsGlyphPaths = [ glyphLord1, glyphLord2, glyphLord3, glyphLord4, glyphLord5, glyphLord6, glyphLord7, glyphLord8, glyphLord9, ];

// Create an array to store the image object names for the Long Count
const LCGlyphPaths = [ glyphKin, glyphWinal, glyphTun, glyphKatun, glyphBaktun, glyphPiktun, glyphKalabtun ];

// Create an array to store the image object names for the ISIG glyphs
const ISIGGlyphPaths = [
    glyphISIGPop, glyphISIGUo, glyphISIGZip, glyphISIGZotz, glyphISIGTzec, glyphISIGXul, glyphISIGYaxkin,
    glyphISIGMol, glyphISIGChen, glyphISIGYax, glyphISIGZac, glyphISIGCeh, glyphISIGMac, glyphISIGKankin,
    glyphISIGMuan, glyphISIGPax, glyphISIGKayab, glyphISIGCumku, glyphISIGUayeb
];

// Create an array to store the image object names for the various glyphs
const variousGlyphPaths = [ glyph819verb, glyphKawil, glyphDNIG, glyphADI, glyphUnknown, ];

// Create an array to store the image object names for the lettered glyphs
const letteredGlyphPaths = [
    glyphF, glyphD, glyphE, glyphC, glyphY, glyphB, glyphA29, glyphA30, glyphX1, glyphX2, glyphX3, glyphX4, glyphX5, glyphX6,
];

// Create an array to store the image object names for the directions
const directionGlyphPaths = [ glyphNorth, glyphWest, glyphSouth, glyphEast, ];

// Create an array to store the image object names for the colors
const colorGlyphPaths = [ glyphWhite, glyphBlack, glyphYellow, glyphRed, ];

// Create the tooltip descriptions when hovering over a glyph
// The order of the tooltips is this...
// ISIG, Baktun, Katun, Tun, Uinal, Kin, Tzolkin, Lord of Night, F, 
// D, E, C, X, B, A, YZ, Haab, 
// DNIG, ADI, Tun, Uinal, Kin, Tzolkin, Haab, 819 verb, Direction, Color, Kawil, Unknown, Piktun, Kalabtun
const toolTipMessages = [
    "ISIG - An oversized Initial Series Introductory Glyph with Haab month patron deities infixed",

    "A Baktun is a cycle of 144,000 days",
    "A Katun is a cycle of 7,200 days",
    "A Tun is a cycle of 360 days",
    "A Winal is a cycle of 20 days",
    "A Kin is a single day",

    "The Tzolk'in is a 260-day sacred calendar",
    "9-Day Cycle - The Lords of the Night were 9 different gods",

    "Glyph F always follows the Lords of the Night",
    "Glyph D counts days less than 20 since the new moon",
    "Glyph E counts days after 20 since the new moon",
    "Glyph C indicates which of the 6 repeating lunar months we are in",
    "Glyph X indicates the name of the lunar month as a symbol",
    "Glyph B followed Glyph X as a description",
    "Glyph A indicates the length of the current month: 29 or 30 days",
    "Glyph YZ represents a 7-day cycle",

    "The Haab is a 365-day solar year",
    "DNIG - Distance Number Indicator Glyph",
    "The ADI instructs the reader to count backward from the Initial Series date",
    "A Tun is a cycle of 360 days",
    "A Winal is a cycle of 20 days",
    "A Kin is a single day",
    "The Tzolk'in is a 260-day sacred calendar",
    "The Haab is a 365-day solar year",
    
    "This is a dedicatory verb for the 819-day cycle",
    "The direction associated with this 819-day station",
    "The color associated with this 819-day station",
    "The god K'awil associated with the 819-day cycle",
    "An unknown glyph that follows K'awil",

    "A Piktun is a cycle of 2,880,000 days",
    "A Kalabtun is a cycle of 57,600,000 days"
];

// ----------------- EXPORT ARRAYS ---------------------

// Declare the arrays to be exportable to other modules
export { numberGlyphPaths };
export { tzolkinGlyphPaths };
export { haabGlyphPaths };
export { lordsGlyphPaths };
export { LCGlyphPaths }; 
export { letteredGlyphPaths };
export { directionGlyphPaths };
export { colorGlyphPaths };
export { toolTipMessages };
export { variousGlyphPaths };
export { ISIGGlyphPaths };