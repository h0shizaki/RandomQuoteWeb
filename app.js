const api_url ="http://api.quotable.io/random";


async function getQuote(){
    fetch(api_url)
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

function randomQuote(){
    const button = document.querySelector('#btn1');
    button.style.background = "red" ;
}


function run(){
    const button = document.getElementById('btn1');
    button.addEventListener("click", 
        ()=> 
            fetch(api_url)
            .then( res => res.json())
            .then(data => {    
                const writer = data['author'] ;
                const quote = data['content'] ;
                showQuote(writer,quote);
            })
    );
    getQuote();

}

run()