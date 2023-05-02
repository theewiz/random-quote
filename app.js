const quote = document.querySelector("p");
const author = document.querySelector("h3");
const btn = document.querySelector("button");

// Quote Object

allQuote = [
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: "― Mahatma Gandhi",
  },
  {
    quote: `“We accept the love we think we deserve.”`,
    author: "― Stephen Chbosky",
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    author: "― Friedrich Nietzsche",
  },
  {
    quote: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
    author: "― Marilyn Monroe",
  },
  {
    quote: `“We are all in the gutter, but some of us are looking at the stars.”`,
    author: "― Oscar Wilde",
  },
  {
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    author: "― Thomas A. Edison",
  },
  {
    quote: `“It is never too late to be what you might have been.”`,
    author: "― George Eliot",
  },
  {
    quote: `“Everything you can imagine is real.”`,
    author: "― Pablo Picasso",
  },
  {
    quote: `“Life isn't about finding yourself. Life is about creating yourself.”`,
    author: "― George Bernard Shaw",
  },
  {
    quote: `
“You can never get a cup of tea large enough or a book long enough to suit me.”`,
    author: "― C.S. Lewis",
  },
  {
    quote: `“Do what you can, with what you have, where you are.”`,
    author: "― Theodore Roosevelt",
  },
  {
    quote: `“And, when you want something, all the universe conspires in helping you to achieve it.”`,
    author: "― Paulo Coelho",
  },
];

const randomQuote = function () {
  let newQuote = Math.floor(Math.random() * allQuote.length);
  quote.innerText = allQuote[newQuote].quote;
  author.innerText = allQuote[newQuote].author;
};

btn.addEventListener("click", randomQuote);
