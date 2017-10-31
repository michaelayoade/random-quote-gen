//define a global variable for the quote array
let quotes=[];

//define an array of quote objects
quotes =[
  {
    quote:"To err is human; to forgive, divine",
    source:"Alexander Pope",
    citation:"An Essay on Criticism",
    year:"1711"
  },
  {
    quote:"To love is to act",
    source:"Victor Hugo",
    citation:"",
    year:""
  },
  {
    quote:"Art does not transform, it just plain forms",
    source:"Roy Lichtenstein",
    citation:"",
    year:""
  },
  {
    quote:"My favourite animal is steak",
    source:"Frank Lebowitz",
    citation:"",
    year:""
  }
]

//function to return a random quote object from the array
function getRandomQuote(){
  let x = Math.floor(Math.random() * quotes.length);
  return quotes[x];
}

//function to display random Quote in html DOM
function printQuote(){
  let randomQuote = getRandomQuote();
  document.getElementsByClassName('quote')[0].textContent = randomQuote.quote;
  document.getElementsByClassName('source')[0].textContent = randomQuote.source;
  document.getElementsByClassName('citation')[0].textContent = randomQuote.citation;
  document.getElementsByClassName('year')[0].textContent = randomQuote.year;
  }

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
