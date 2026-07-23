
const quotes = [
  {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "It always seems impossible until it's done.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "The future belongs to those who believe in the beauty of their dreams.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "In the middle of every difficulty lies opportunity.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Happiness depends upon ourselves.",
    "author": "Aristotle"
  }
]

const quoteMessage = document.querySelector("#quote_container span:first-child");
const quoteAuthor = document.querySelector("#quote_container span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteMessage.innerText = todayQuote.quote;
quoteAuthor.innerText = todayQuote.author;