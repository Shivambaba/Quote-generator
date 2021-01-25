const colors = [
    {name:"Louis L’Amour",quote:"Start writing, no matter what. The water does not flow until the faucet is turned on."},
    {name:"William Faulkner",quote:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good"},
    {name:"Terry Pratchett",quote:"The first draft is just you telling yourself the story"},
    {name:"Octavia E. Butler",quote:"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it"},
    {name:"Jack London",quote:"You can’t wait for inspiration. You have to go after it with a club"},
    
]

const quotebtn = document.querySelector('#quoteBtn');
const quoteauthor = document.querySelector('#quoteauthor');
const quote = document.querySelector('#quote');

quotebtn.addEventListener("click",display);

function display(){
    
    
    let random = Math.floor(Math.random()*colors.length);
    
    quoteauthor.innerHTML = colors[random].name;
    quote.innerHTML = colors[random].quote;
}