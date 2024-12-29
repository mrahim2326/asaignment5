// popup section

document.getElementById('popUP').style.display="none";
document.getElementById('close-Cnf').addEventListener('click',
    function(){
    document.getElementById('popUP').style.display="none";
   
})
document.getElementById('donateBtn').addEventListener('click',
    function(){
    document.getElementById('popUP').style.display="block";
   
})
document.getElementById('donateBtn3').addEventListener('click',
    function(){
    document.getElementById('popUP').style.display="block";
   
})
document.getElementById('donateBtn2').addEventListener('click',
    function(){
    document.getElementById('popUP').style.display="block";
   
})
if(value==invalid){
    document.getElementById('popUP').style.display="none";
}

