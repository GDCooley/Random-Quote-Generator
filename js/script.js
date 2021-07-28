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
        source: 'Carl Sagan'
    },
    {
        quote: 'I only wanted to one time see you laughing.',
        source: 'Prince',
        citation: 'Purple Rain',
        year: '1984'
    },
    {
        quote: "If cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember.",
        source: 'Terry Pratchett',
        year: '1992'
    },
    {
        quote: 'Never let your sense of morals prevent you from doing what is right.',
        source: 'Isaac Asimov',
        citation: 'Foundation'
    },
    {
        quote: "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway.",
        source: 'Mary Kay Ash',
    },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
    let num = Math.floor(Math.random() * quotes.length); //obtains a random number between 1 and the # of array values
    console.log(num);
    return quotes[num];
}

/***
 * `printQuote` function
 ***/


function printQuote() {
    let randomQuote = getRandomQuote();

    document.querySelector('.quote').innerHTML = `${randomQuote.quote}`;
    if (randomQuote.citation && randomQuote.year) {
        document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="citation"></span><span class="year"></span>`;
        document.querySelector('.citation').innerHTML = `${randomQuote.citation}`;
        document.querySelector('.year').innerHTML = `${randomQuote.year}`;
    } else if (randomQuote.citation && !randomQuote.year) {
        document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="citation"></span>`;
        document.querySelector('.citation').innerHTML = `${ randomQuote.citation }`;
    } else if (!randomQuote.citation && randomQuote.year) {
        document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="year"></span>`;
        document.querySelector('.year').innerHTML = `${randomQuote.year}`;
    } else {
        document.querySelector('.source').innerHTML = `${randomQuote.source}`;
    }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);