console.log('client.js is sourced!');

function onReady() {
    //Get existing data from server
    getCalculations();
}

onReady();

// Get existing calculations from server and render to DOM
function getCalculations() {
    console.log('Getting calculations...');
    axios({
      method: 'GET',
      url: '/calculations',
    })
      .then(function (response) {
        let newCalculation = response.data
        renderCalculations(newCalculation);
      })
      .catch(function (error) {
        console.log('Error getting calculations', error);
        alert('Sorry. Something bad happened. Try again later.');
      });
  }


  function renderCalculations(newCalculation) {
    console.log('rendering calculations to the DOM', newCalculation);
  
    let recentResult = document.getElementById('recentResult');
    let resultHistory = document.getElementById('resultHistory')
  
    // empty the output element for recent results
    recentResult.innerHTML = '';
 
    // loop through the books to display them
    for (let item of newCalculation) {
      // Append the History to the DOM in history output area
      resultHistory.innerHTML += `
            <li>
              <p>${item.numOne}${item.operator}${item.numTwo} = ${item.result}</p>
            </li>`;
    } 
    // Display recent results to the recent section
    if (newCalculation.length > 0) {
        recentResult.innerHTML += `
        <li>${newCalculation[newCalculation.length - 1].result}</li>`;
    }
}

function addCalculation(event) {
    // Store the calculations inputs in variables
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
  
    // Send the new data to the server
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalculation,
    }).then(function (response) {
      console.log('Calculation added');
  
      // Clear the inputs
      firstNumber.value = '';
      secondNumber.value = '';

    });
  }





