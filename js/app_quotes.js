const quotes = [
    {
        quote: "Danger foreseen is half avoided",
        author: "Walt Diseny"
    },
    {
        quote: "Behind the clouds is the sun still shining",
        author: "aaa",
    },
    {
        quote: "The sweetest grapes hang highest",
        author: "bbb",
    },
    {
        quote: "Hope for the best, but prepare for yhe worst",
        author: "ccc",
    },
    {
        quote: "The world is his who enjoys it",
        author: "ddd",
    },
    {
        quote: "Truth will out",
        author: "fff",
    },
    {
        quote: "If you laugh, blessing will come your way",
        author: "ggg",
    },
    {
        quote: "No sweet without no sweat",
        author: "hhh",
    },
    {
        quote: "Time is life itself",
        author: "iii",
    },
    {
        quote: "Don't worry be happy",
        author: "jjj",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



