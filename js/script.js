//define a global variable for the quote array
let quotes=[];

//define an array of quote objects
quotes =[
  {
    quote:"To err is human; to forgive, divine",
    source:"Alexander Pope",
    citation:"",
    year:""
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
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function printQuote(){
  document.getElementsByClassName('quote').innerHTML = getRandomQuote()['quote'];
  document.getElementsByClassName('source').innerHTML = getRandomQuote()['source'];
  document.getElementsByClassName('citation').innerHTML = getRandomQuote()['citation'];
  document.getElementsByClassName('year').innerHTML = getRandomQuote()['year'];
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote(), false);
