let keys = document.querySelectorAll('.key');
let screen = document.querySelector('.screen');

for (let i in keys){
  keys[i].onclick = function () {
    let keyInput = screen.innerHTML;
    let equation = keyInput;
    let keyValue = this.innerHTML;
    let oper = document.querySelectorAll('.operator');
    let operators = oper.innerHTML;

    event.preventDefault();     //CHECK ON THIS

    screen.innerHTML += keyValue;

    if (keyValue === 'C') {
      screen.innerHTML = '';
    }
    else if (keyValue === '=') {
      equation = keyInput;
      screen.innerHTML = eval(equation);

    }



    console.log(keys[i]);
    console.log(keyInput);
    console.log(equation);

  } //onclick function end
} //for loop end
//======fin==============
