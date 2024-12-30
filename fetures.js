// blog and home page swaping
document.getElementById('blog').addEventListener('click',
    function(){
        window.location.href='fAndQ.html'
    }
)
//   secondNavbar
document.getElementById('history').addEventListener('click',
    function(){
    document.getElementById('donation').style.backgroundColor="white";
    document.getElementById('history').style.backgroundColor="#B4F461";
    document.getElementById('donation').style.border="1px grey solid";
    document.getElementById('history').style.border="none";
    document.getElementById('main-section').style.display="none";
    document.getElementById('footer-setion').style.display="block";

})             
document.getElementById('donation').addEventListener('click',
    function(){
    document.getElementById('history').style.backgroundColor="white";
    document.getElementById('donation').style.backgroundColor="#B4F461";
    document.getElementById('history').style.border="1px grey solid";
    document.getElementById('donation').style.border="none";
    document.getElementById('footer-setion').style.display="none";
    document.getElementById('main-section').style.display="block";

})

