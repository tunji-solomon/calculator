
let displayfield = document.querySelector('.total')
function getValue(value){
  displayfield.value += value;
}

function calculate(){
  try{
    let totalV = eval(displayfield.value);
    displayfield.value = totalV;
  }catch(error){
    displayfield.value = 'error' 
  }
}

function clearCalculations(){
  displayfield.value = '';
}

// function to apply css to symbols btn.

function activeCalculatorSymbol(btn){
  let addButtonElement = document.querySelector('.add');
  let minusButtonElement = document.querySelector('.minus');
  let multiplyButtonElement = document.querySelector('.multiply');
  let divideButtonElement = document.querySelector('.divide');
  let clearButtonElement = document.querySelector('.clear')
  if(btn === '+'){
    addButtonElement.classList.add('button-active');
    minusButtonElement.classList.remove('button-active');
    multiplyButtonElement.classList.remove('button-active');
    divideButtonElement.classList.remove('button-active');
  }else if (btn === '-'){
    addButtonElement.classList.remove('button-active');
    minusButtonElement.classList.add('button-active');
    multiplyButtonElement.classList.remove('button-active');
    divideButtonElement.classList.remove('button-active');
  }else if (btn === '*'){
    addButtonElement.classList.remove('button-active');
    minusButtonElement.classList.remove('button-active');
    multiplyButtonElement.classList.add('button-active');
    divideButtonElement.classList.remove('button-active');
  }else if (btn === '/'){
    addButtonElement.classList.remove('button-active');
    minusButtonElement.classList.remove('button-active');
    multiplyButtonElement.classList.remove('button-active');
    divideButtonElement.classList.add('button-active');
  }else if (btn === 'clear' || '='){
    addButtonElement.classList.remove('button-active');
    minusButtonElement.classList.remove('button-active');
    multiplyButtonElement.classList.remove('button-active');
    divideButtonElement.classList.remove('button-active');
  }
}

// For applying css onclick attributes on symbols

let symbolElem = document.querySelectorAll('.symbol-btn');
symbolElem.forEach((element) => {
  element.onclick = () => {
    if (element.innerHTML != 'clear'){
      getValue(element.innerHTML);
    activeCalculatorSymbol(element.innerHTML);

    }else{
      clearCalculations();
      activeCalculatorSymbol(element.innerHTML);
    }
  }
})


// Number input onclick method 

document.querySelectorAll('.number-btn').forEach((element) => {
  element.onclick = () => {
    if(element.innerHTML != '='){
      getValue(element.innerHTML);
    }else{
      calculate();
      activeCalculatorSymbol(element.innerHTML);
    }
  }
})
