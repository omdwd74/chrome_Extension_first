fetch('https://inspo-quotes-api.herokuapp.com/quotes/random')
    .then(data=> data.json())
    .then(My_Quote=>{
        const quotes = My_Quote.quote.text;
        const author = My_Quote.quote.author;
        const authorElement = document.getElementById('authorElement');
        const quoteElement = document.getElementById('quoteElement');
        quoteElement.innerHTML = quotes;
        authorElement.innerHTML = author;
        

    })