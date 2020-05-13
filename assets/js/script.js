let bill = document.querySelector("#bill");
    percent = document.querySelector("#percent");
    people = document.querySelector("#people");
    tipPerPerson = document.querySelector("#perPerson");
    totalTip = document.querySelector("#totalTip");
    totalPrice = document.querySelector("#totalPrice");
    submit = document.querySelector('.btn');
    errorMessage = document.querySelector('#error')


let init = () => {
   submit.addEventListener('click', () => {
      if (bill.value > 0 && people.value > 0 && percent.value > 0 && percent.value <= 100) {
         calcTotalTip()

         calcTipPerPerson()

         calcTotalAmount()
      }

      else if (percent.value > 100) {
         showError('Percentage must be less than 100')
      }

      else if (bill.value === 'e' || percent.value === 'e' || people.value === 'e'){
         showError('e is not a number')
      }

      else if (bill.value === '' || percent.value === '' || people.value === ''){
         showError('Please fill all fields appropriately')
      }

      else if (bill.value == 0){
         showError('Bill cannot be 0')
      }

      else if (percent.value == 0){
         showError('Percentage cannot be 0')
      }

      else if (people.value == 0){
         showError('Number of people cannot be 0')
      }

      else {
         showError('All values should be positive numbers only')
      }
   })
}

let calcTotalTip = () => {

   _totalTip = parseFloat((bill.value * (percent.value / 100)).toFixed(2))
   totalTip.textContent = `$${_totalTip}`;
}

let calcTipPerPerson = () => {

   _tipPerPerson = ( _totalTip / parseInt(people.value)).toFixed(2)
   tipPerPerson.textContent = `$${_tipPerPerson}`;
}

let calcTotalAmount = () => {

   _totalPrice = (_totalTip + parseFloat(bill.value)).toFixed(2)
   totalPrice.textContent = `$${_totalPrice}`;
}
  
let showError = (error) => {
   errorMessage.style.display = 'block'
   errorMessage.textContent = error
   setTimeout(clearError, 3000)
}

let clearError = () => {
   errorMessage.style.display = 'none'
}


init()