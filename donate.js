document.getElementById('donateBtn')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputAmount = parseFloat(document.getElementById('donat-amnt').value);

    if (!isNaN(inputAmount) && inputAmount > 0) {
      const balance1Element = document.getElementById('my-blance1');
      const balance1 = parseFloat(balance1Element.textContent);
      const updatedBalance1 = balance1 - inputAmount;

      if (updatedBalance1 >= 0) { 
        balance1Element.textContent = updatedBalance1.toFixed(2);

        const balance2Element = document.getElementById('main-balance');
        const balance2 = parseFloat(balance2Element.textContent);
        const updatedBalance2 = balance2 + inputAmount;

        document.getElementById('main-balance').innerText=updatedBalance2;
        document.getElementById('donat-amnt').value = '';

        const div=document.createElement('div');
        div.classList.add('bg-gray-300');
        div.innerHTML=`
        <h2 class="text-lg font-bold">Donate for flood noakali:</h2>
        <p  class="text-lg font-bold">
         Subtraction:: ${updatedBalance1} <span class="text-orange-600">TK</span>
           New-With-Add:: ${updatedBalance2} <span class="text-orange-600">TK</span></p>

        `
        document.getElementById('history-ftr').appendChild(div);
      } 
      else {
        alert('Balance 1 cannot go negative!');
      }
    } 
    else {
      alert('Please enter a valid positive number!');
    }
  });
//   tow section
document.getElementById('donateBtn2')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputAmount = parseFloat(document.getElementById('donat-amnt2').value);

    if (!isNaN(inputAmount) && inputAmount > 0) {
      const balance1Element = document.getElementById('my-amnt2');
      const balance1 = parseFloat(balance1Element.textContent);
      const updatedBalance1 = balance1 - inputAmount;

      if (updatedBalance1 >= 0) { 
        balance1Element.textContent = updatedBalance1.toFixed(2);

        const balance2Element = document.getElementById('main-balance');
        const balance2 = parseFloat(balance2Element.textContent);
        const updatedBalance2 = balance2 + inputAmount;

        document.getElementById('main-balance').innerText=updatedBalance2;
        document.getElementById('donat-amnt2').value = '';

        const div=document.createElement('div');
        div.classList.add('bg-gray-200');
        div.innerHTML=`
        <h2 class="text-lg font-bold">Donate for flood Feni:</h2>
        <p  class="text-lg font-bold">
         Subtraction:: ${updatedBalance1}  <span class="text-orange-600">TK</span>
           New-With-Add:: ${updatedBalance2}  <span class="text-orange-600">TK</span></p>

        `
        document.getElementById('history-ftr').appendChild(div);
      } else {
        alert('Balance 1 cannot go negative!');
      }
    } else {
      alert('Please enter a valid positive number!');
    }
  });
  //three section
  document.getElementById('donateBtn3')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputAmount = parseFloat(document.getElementById('donat-amnt3').value);

    if (!isNaN(inputAmount) && inputAmount > 0) {
      const balance1Element = document.getElementById('my-blance3');
      const balance1 = parseFloat(balance1Element.textContent);
      const updatedBalance1 = balance1 - inputAmount;

      if (updatedBalance1 >= 0) { 
        balance1Element.textContent = updatedBalance1.toFixed(2);

        const balance2Element = document.getElementById('main-balance');
        const balance2 = parseFloat(balance2Element.textContent);
        const updatedBalance2 = balance2 + inputAmount;

        document.getElementById('main-balance').innerText=updatedBalance2;
        document.getElementById('donat-amnt3').value = '';

        const div=document.createElement('div');
        div.classList.add('bg-gray-300');
        div.innerHTML=`
        <div class="border-2
           p-5 my-5 rounded-lg">
        <h2 class="text-lg font-bold">Aid for Quota Movement:</h2>

        <h4>
         Subtraction:: ${updatedBalance1} <span class="text-orange-600">TK</span>
         New-With-Add:: ${updatedBalance2}  <span class="text-orange-600">TK</span></h4>
         </div>

        `
        document.getElementById('history-ftr').appendChild(div);
      } 
      else {
        alert('Balance 1 cannot go negative!');
      }
    } 
    else {
      alert('Please enter a valid positive number!');
    }
  });
