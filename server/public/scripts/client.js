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
        renderCalculations(response.data);
      })
      .catch(function (error) {
        console.log('Error getting calculations', error);
        alert('Sorry. Something bad happened. Try again later.');
      });
  }


  function renderCalculations(newCalc) {
    console.log('rendering calculations to the DOM', newCalc);
  
    let calculationsResults = document.getElementById('calculationsResults');
  
    // empty the output element
    calculationsResults.innerHTML = '';
  
    // loop through the books to display them
    for (let item of newCalc) {
      // Append the book to the DOM in book output area
      calculationsResults.innerHTML += `
            <li>
              <p>${item}</p>
            </li>`;
    }
  }




