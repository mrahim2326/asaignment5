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

        balance2Element.textContent = updatedBalance2.toFixed(2);
        document.getElementById('donat-amnt').value = '';
      } else {
        alert('Balance 1 cannot go negative!');
      }
    } else {
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

        balance2Element.textContent = updatedBalance2.toFixed(2);
        document.getElementById('donat-amnt2').value = '';
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

        balance2Element.textContent = updatedBalance2.toFixed(2);
        document.getElementById('donat-amnt3').value = '';
      } else {
        alert('Balance 1 cannot go negative!');
      }
    } else {
      alert('Please enter a valid positive number!');
    }
  });
