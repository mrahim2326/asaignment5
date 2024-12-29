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


})             
document.getElementById('donation').addEventListener('click',
    function(){
    document.getElementById('history').style.backgroundColor="white";
    document.getElementById('donation').style.backgroundColor="#B4F461";
    document.getElementById('history').style.border="1px grey solid";
    document.getElementById('donation').style.border="none";

})
// donate money
// function getInputFieldValueById(){
//     console.log('will');
//     const addMoney=document.getElementById('donat-amnt2').ariaValueMax;
//     return addMoney;
// }
