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

// The below is an array of objects containing the quotes for the overall program

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
        year: '1992',
        tags: ['fantasy', 'humor'] //Lucked out with this on first attempt using an array for multiple tags
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

// This function creates a random number from 0 to a max based on the length of the quotes Array.
// The random number generated is then used to return the quote at the same index location within the quotes Array.

function getRandomQuote() {
    const num = Math.floor(Math.random() * quotes.length);
    // console.log(num);
    return quotes[num];
}

/***
 * `printQuote` function
 ***/

// This function prints a random quote to the web page.  It begins by calling the GetRandomQuote function which returns
// the quote.  The function then concatenates the full HTML string that will be printed.  It always prints the quote and 
// author.  It then determines if the quote also includes a citation, year, and / or associated tags and if so adds
// them to the HTML string.  Commented out at the bottom of the function was the first way I did this, which worked, but
// did not match the requirements of the project.

function printQuote() {
    let randomQuote = getRandomQuote();
    let HTMLString = ``;
    HTMLString += `<p class="quote">${randomQuote.quote}</p>`;
    HTMLString += `<p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        HTMLString += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        HTMLString += `<span class="year">${randomQuote.year}</span>`;
    }
    HTMLString += `</p>`;
    if (randomQuote.tags) {
        HTMLString += `<p class="tags">Tags: ${randomQuote.tags}</p>`
    }

    // This optional portion changes the background to a new color every time the a new quote is presented

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // This prints the resulting string to the web page in place of the previous quote

    document.querySelector('.quote-box').innerHTML = HTMLString;

    // This was the alternate way I did it before rereading the requirements
    // document.querySelector('.quote').innerHTML = `${randomQuote.quote}`;
    // if (randomQuote.citation && randomQuote.year) {
    //     document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="citation"></span><span class="year"></span>`;
    //     document.querySelector('.citation').innerHTML = `${randomQuote.citation}`;
    //     document.querySelector('.year').innerHTML = `${randomQuote.year}`;
    // } else if (randomQuote.citation && !randomQuote.year) {
    //     document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="citation"></span>`;
    //     document.querySelector('.citation').innerHTML = `${ randomQuote.citation }`;
    // } else if (!randomQuote.citation && randomQuote.year) {
    //     document.querySelector('.source').innerHTML = `${randomQuote.source}<span class="year"></span>`;
    //     document.querySelector('.year').innerHTML = `${randomQuote.year}`;
    // } else {
    //     document.querySelector('.source').innerHTML = `${randomQuote.source}`;
    // }
}

//  The below is a refresh interval to the code that selects a new random quote if the button is not pushed by a 
//  user in the alotted time.

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);