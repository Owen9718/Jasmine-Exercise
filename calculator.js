window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  }
  // let loanVal = document.getElementById("loan-amount").value
  // let rateVal = document.getElementById("loan-rate").value
  // let lengthVal = document.getElementById("loan-years").value

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let defValues = {
  amount: document.getElementById("loan-amount").value = 1000,
  years: document.getElementById("loan-years").value = 5,
  rate: document.getElementById("loan-rate").value = 6
  }
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
let currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  {
    const monthlyRate = (values.rate / 100) / 12;
    const n = Math.floor(values.years * 12);
    return (
      (monthlyRate * values.amount) /
      (1 -(1 + monthlyRate)**-n)
    ).toFixed(2);
  }
}
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUi = document.getElementById("monthly-payment");
  monthlyUi.innerText ='$'+ monthly;
}

