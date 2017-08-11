let keys = document.querySelectorAll('.key');
let screen = document.querySelector('.screen');

for (let i in keys){
  keys[i].onclick = function () {
    let keyInput = screen.innerHTML;
    let equation = keyInput;
    let keyValue = this.innerHTML;

    screen.innerHTML += keyValue;

    if (keyValue === 'C') {
      screen.innerHTML = '';
    }
    else if (keyValue === '=') {
      equation = keyInput;
      screen.innerHTML = Math.round((eval(equation)) * 10000) / 10000;
    }

    console.log(keys[i]);
    console.log(keyInput);
    console.log(equation);

  } //onclick function end
} //for loop end
//======fin==============
