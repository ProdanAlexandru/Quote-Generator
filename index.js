const quotes = [
    {
        name:"Philip Seymour Hoffman",
        quote:"If you get a chance to act in a room that somebody else has paid rent for, then you’re given a free chance to practice your craft."
    },
    {
        name:"Peter Sarsgaard",
        quote:"If all the circumstances of acting are made too easy, then there’s no grain of sand to make the pearl."
    },
    {
        name:"Sarah Silverman",
        quote:"If you live in the past that’s depression, and if you live in the future that’s anxiety. So you have no choice but to live in the present."
    },
    {
        name:"Geena Davis",
        quote:"If you risk nothing, then you risk everything."
    }

];

const quoteBtn= document.querySelector(".quotegnr");
const quoteText = document.querySelector(".clb-quote");
const quoteAuthor = document.querySelector(".quote-author");

quoteBtn.addEventListener("click", generateQuote);

function generateQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    quoteText.innerHTML = quotes[random].quote;
    quoteAuthor.innerHTML = quotes[random].name;

    console.log(quotes[random].name);
}