
document.getElementById('blog').addEventListener('click',
    function(){
        window.location.href='fAndQ.html'
    }
)

document.getElementById('history').addEventListener('click',
    function(){
    document.getElementById('donation').style.backgroundColor="white";
    document.getElementById('history').style.backgroundColor="#B4F461";

})
document.getElementById('donation').addEventListener('click',
    function(){
    document.getElementById('history').style.backgroundColor="white";
    document.getElementById('donation').style.backgroundColor="#B4F461";

})

