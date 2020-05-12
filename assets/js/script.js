let bill = document.querySelector("#bill");
let percent = document.querySelector("#percent");
let people = document.querySelector("#people");
let tipPerPerson = document.querySelector("#perPerson");
let totalTip = document.querySelector("#totalTip");
let totalPrice = document.querySelector("#totalPrice");
let submit = document.querySelector('.btn');
let errorMessage = document.querySelector('#error')


let init = () => {
   
}


submit.addEventListener('click', () => {

   calcTotalTip()

   _tipPerPerson = ( _totalTip / parseInt(people.value)).toFixed(2)
   tipPerPerson.textContent = `$${_tipPerPerson}`;

   _totalPrice = (_totalTip + parseFloat(bill.value)).toFixed(2)
   totalPrice.textContent = `$${_totalPrice}`;

})



let calcTotalTip = () => {

   if (bill.value < 1){
      showError('ADD A VALUE GREATER THAN ONE')
   }
   else {
      _totalTip = parseFloat((bill.value * (percent.value / 100)).toFixed(2))
      totalTip.textContent = `$${_totalTip}`;
   } 
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