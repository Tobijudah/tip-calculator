let bill = document.querySelector("#bill");
let percent = document.querySelector("#percent");
let people = document.querySelector("#people");
let tipPerPerson = document.querySelector("#perPerson");
let totalTip = document.querySelector("#totalTip");
let totalPrice = document.querySelector("#totalPrice");
let submit = document.querySelector('.btn');


let init = () => {

}


submit.addEventListener('click', () => {
   _totalTip = parseFloat((bill.value * (percent.value / 100)).toFixed(2))
   totalTip.textContent = `$${_totalTip}`;

   _tipPerPerson =( _totalTip / parseInt(people.value)).toFixed(2)
   tipPerPerson.textContent = `$${_tipPerPerson}`;

   _totalPrice = (_totalTip + parseFloat(bill.value)).toFixed(2)
   totalPrice.textContent = `$${_totalPrice}`;

})


init()