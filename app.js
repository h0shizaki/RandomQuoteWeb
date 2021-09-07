const api_url ="http://api.quotable.io/random";


async function getQuote(url){
    fetch(url)
    .then( res => res.json())
    .then(data => {    
        const writer = data['author'] ;
        const quote = data['content'] ;
        showQuote(writer,quote);
    } );


    
    
}

function showQuote(author , context){
    const text = document.querySelector('#text') ;
    text.innerHTML = context ;

    const text2 = document.querySelector('#author') ;
    text2.innerHTML = author ;

}


function run(){
    getQuote(api_url);

}

run()