const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream."
];

function generateQuote() {
    const quoteElement = document.querySelector('.quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}