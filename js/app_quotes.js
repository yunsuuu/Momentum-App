const quotes = [
    {
        line: "The greatest thing you'll ever learn is just to love and be loved in return",
        movie: " - Moulin Rouge"
    },
    {
        line: "It's only after we've lost everything that we're free to do anything",
        movie: " - Fight Club",
    },
    {
        line: "The past can hurt, but you can either run from it, or learn from it",
        movie: " - Lion King",
    },
    {
        line: "Carpe Diem, Seize the day. Make your lives extraordinary",
        movie: " - Dead Poets Society",
    },
    {
        line: "Good words, good thoughts and good deeds",
        movie: " - Bohemian Rhapsody",
    },
    {
        line: "We need to fail. We need to fail down here so we don't fail up there",
        movie: "- First man",
    },
    {
        line: "It is not our abilities that show what we truly are, it is our choices",
        movie: " - Harry Potter",
    },
    {
        line: "If we didn't do what we loved, we wouldn't exist",
        movie: " - Adonis",
    },
    {
        line: "Every man dies, not every man really lives",
        movie: " - Braveheart",
    },
    {
        line: "What we do in life echoes in eternity",
        movie: " - Gladiator",
    },
]

const line = document.querySelector("#quotes span:first-child");
const movie = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

line.innerText = todaysQuote.line;
movie.innerText = todaysQuote.movie;



