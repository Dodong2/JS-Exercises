//Exer1
const btn1 = document.querySelector(".btn1");
const print1 = document.querySelector(".print1");

btn1.addEventListener("click", function () {
  const input = document.querySelector(".input").value;
  const mess = `Hello ${input}`;
  print1.innerHTML = mess;
});

//Exer10
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const print2 = document.querySelector(".print2");

//Multiply
btn2.addEventListener("click", function () {
  const input1 = document.querySelector(".input1").value;
  const input2 = document.querySelector(".input2").value;
  const res1 = input1 * input2;
  print2.innerHTML = res1;
});
//Divide
btn3.addEventListener("click", function () {
  const input1 = document.querySelector(".input1").value;
  const input2 = document.querySelector(".input2").value;
  const res2 = input1 / input2;
  print2.innerHTML = res2;
});
//Add
btn4.addEventListener("click", function () {
  const input1 = parseInt(document.querySelector(".input1").value);
  const input2 = parseInt(document.querySelector(".input2").value);
  const res3 = input1 + input2;
  print2.innerHTML = res3;
});
//Subtract
btn5.addEventListener("click", function () {
  const input1 = document.querySelector(".input1").value;
  const input2 = document.querySelector(".input2").value;
  const res4 = input1 - input2;
  print2.innerHTML = res4;
});
//Modulus
btn6.addEventListener("click", function () {
  const input1 = document.querySelector(".input1").value;
  const input2 = document.querySelector(".input2").value;
  const res5 = input1 % input2;
  print2.innerHTML = res5;
});

//Exer12
const btn7 = document.querySelector(".btn7");
const print3 = document.querySelector(".print3");

btn7.addEventListener("click", function () {
  const input3 = parseInt(document.querySelector(".input3").value);
  const input4 = parseInt(document.querySelector(".input4").value);
  const input5 = parseInt(document.querySelector(".input5").value);
  if (input3 > input4 && input3 > input5) {
    print3.innerHTML = `${input3} is the largest integer`;
  } else if (input4 > input3 && input4 > input5) {
    print3.innerHTML = `${input4} is the largest integer`;
  } else if (input5 > input3 && input5 > input4) {
    print3.innerHTML = `${input5} is the largest integer`;
  } else {
    print3.innerHTML = "please enter a number";
  }
});

//Exer13
const btn8 = document.querySelector(".btn8");
const print4 = document.querySelector(".print4");

btn8.addEventListener("click", function () {
  const input6 = parseInt(document.querySelector(".input6").value);
  const input7 = parseInt(document.querySelector(".input7").value);
  const input8 = parseInt(document.querySelector(".input8").value);
  if (input6 < input7 && input6 < input8) {
    print4.innerHTML = `${input6} is the smallest integer`;
  } else if (input7 < input6 && input7 < input8) {
    print4.innerHTML = `${input7} is the smallest integer`;
  } else if (input8 < input6 && input8 < input7) {
    print4.innerHTML = `${input8} is the smallest integer`;
  } else {
    print4.innerHTML = "please enter a number";
  }
});

//Exer14
const btn9 = document.querySelector('.btn9')
const print5 = document.querySelector('.print5')

const average = (input9, input10, input11) => {
    return input9 + input10 + input11 / 3
}

btn9.addEventListener('click', function(){
    const input9 = parseInt(document.querySelector('.input9').value)
    const input10 = parseInt(document.querySelector('.input10').value)
    const input11 = parseInt(document.querySelector('.input11').value)

    const res6 = average(input9, input10, input11)
    print5.innerHTML = res6
})



//Exer15
const btn10 = document.querySelector('.btn10')
const print6 = document.querySelector('.print6')

btn10.addEventListener('click', function(){
    const input12 = parseInt(document.querySelector('.input12').value)
    const input13 = parseInt(document.querySelector('.input13').value)

    const userNum = input12
    const userR = input13
    let output = '';
     for(let i = 1; i <= userR; i++) {
        const res7 = userNum * i
        output += `${userNum} x ${i} = ${res7}<br>`;
     }
     print6.innerHTML = output;

})
