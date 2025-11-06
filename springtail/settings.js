// HELLO! This is the file you are supposed to edit to play with the refsheet.

// TITLES
// If you don't want the headers to appear, just leave each one as "". The fourth header controls the toggle switch's title
const headers = [
    "Angles",
    "Outfits",
    "Info",
    "Hide"
]

// ADD ANGLES HERE. 
// Display name first, file path second.
const angles = [
    ["Front", "images/springtail_front_nakey.png"],
	["Three-Fourths", "images/springtail_34th_nakey.png"],
//    ["!", "images/placeholder.png"]
]

// ANGLE TOGGLES
// Enable and Disable
const angleToggles = [
    "",
	"goggles"
]

// ADD OUTFITS HERE. 
// Display name first, file path second.
const outfits = [
    ["Default (Bowtie Vest)", "images/springtail_front_default.png"],
//    ["!", "images/placeholder.png"]
]

// ADD INFO HERE.

// TITLE
// To use a text title, put "t" as the first value and your desired title as the second.
// To use an image title, put "i" as the first value and the path to the image as the second.
// If you don't want to use a title, put the first value as "n".
// const title = ["i", "images/logo.svg"]
const title = ["t", "SPRINGTAIL"]

// INFORMATION

// Type of info first, description second.
// For headings, Put the heading text as the first value and then put "h" as the second.
// For unordered lists, Put the heading text as the first value and then put "l" as the second. Then for a third value, make an array that 
const info = [
	["Name", "??? 'Springtail' ???"],
	["Species", "Hexapodian (Springtail) Cosmic Entity"],
	["Gender", "Bigender"],
    ["Pronouns", "Any/All"],
    ["Cosmic Duty", "Assistant God Auditor"],
]

// ADD COLORS HERE
// HEX code first, use case second, and optionally, the outfit third.
// For headings, Put the heading text as the first value and then put "h" as the second.
const colors = [
    ["339444", "Main Body"],
	["004618", "Goggles, Back Carapace, Hands, Feet"],
	["326273", "Antennae, Goggle Strap, Midsection"],
	["FAFF81", "Eyes, Teeth, Tail"]
]


// ANIMATIONS
// This will be replaced with preset animations later but for now you can just modify this code.

const keyframesLeft = [
    { transform: 'translateX(10px)' },
    { transform: 'translateX(0px)' } 
];

const keyframesRight = [
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(0px)' }
];

const options = {
    duration: 400,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    fill: 'forwards'
};



