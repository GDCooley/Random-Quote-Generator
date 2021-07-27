/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/

const quotes = [{
        quote: 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
        source: 'Carl Sagan',
        citation: 'Unknown',
        year: 'Unknown'
    },
    {
        quote: 'I only wanted to one time see you laughing.',
        source: 'Prince',
        citation: 'Purple Rain',
        year: '1984'
    },
    {
        quote: "Research is what I'm doing when I don't know what I'm doing.",
        source: 'Wernher von Braun',
        citation: 'Unknown',
        year: 'Unknown'
    },
    {
        quote: 'Everything is theoretically impossible, until it is done.',
        source: 'Robert A. Heinlein',
        citation: 'Unknown',
        year: 'Unknown'
    },
    {
        quote: "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway.",
        source: 'Mary Kay Ash',
        citation: 'Unknown',
        year: 'Unknown'
    },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {

}

/***
 * `printQuote` function
 ***/

function printQuote() {
    let quote = getRandomQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);