let bill = document.querySelector("#bill");
let percent = document.querySelector("#percent");
let people = document.querySelector("#people");
let tipPerPerson = document.querySelector("#perPerson");
let totalTip = document.querySelector("#totalTip");
let totalPrice = document.querySelector("#totalPrice");
let submit = document.querySelector('.btn');
let errorMessage = document.querySelector('#error')


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