
let quotesBtn = document.getElementById("quotes-btn");
quotesBtn.addEventListener("click", quotesBtnFunction)

function quotesBtnFunction(){
    
    // let randomQuotes = Math.floor(Math.random() * (quotes().length-1));
    // let output = quotes()[randomQuotes]; 

    let randomQuotes = Math.floor(Math.random() * quotes.length);
    let output = quotes[randomQuotes];

    // let quotesOutput = document.getElementById("quotes-output")
    // quotesOutput.innerText = output;
    
    //new feature
    let outputArray = output.split("—")
    let outputQuote = outputArray[0];
    let outputQuoteWithTrim = outputQuote.trim();
    let outputAuthor = outputArray[1];
    let outputAuthorWithTrim = outputAuthor.trim();

    let quotesOutputQuote = document.getElementById("quotes-output-quote")
    quotesOutputQuote.textContent = outputQuoteWithTrim;

    let quotesOutputAuthor = document.getElementById("quotes-output-author")
    quotesOutputAuthor.textContent = outputAuthorWithTrim;
}

 