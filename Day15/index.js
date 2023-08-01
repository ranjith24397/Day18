let btnac = document.getElementById("ac");
let btndel = document.getElementById("del");
let btndoublezero = document.getElementById("dz");
let btndiv = document.getElementById("/");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btnmul = document.getElementById("*");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btnsub = document.getElementById("-");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btnadd = document.getElementById("+");
let btndot = document.getElementById(".");
let btnzero = document.getElementById("0");
let btnequal = document.getElementById("=");

//add event
btnac.addEventListener("click", ()=>{
  Clear();
})

btndel.addEventListener("click", ()=> {
  del();
})
btndoublezero.addEventListener("click", ()=> {
  display('00');
})
btndiv.addEventListener("click", ()=> {
  display("/");
})
btn7.addEventListener("click", ()=> {
  display("7");
})
btn8.addEventListener("click", ()=> {
  display("8")
})
btn9.addEventListener("click", ()=> {
  display("9")
})
btnmul.addEventListener("click", ()=> {
  display("*")
})
btn4.addEventListener("click", ()=> {
  display("4")
})
btn5.addEventListener("click", ()=> {
  display("5")
})
btn6.addEventListener("click", ()=> {
  display("6")
})
btnsub.addEventListener("click", ()=> {
  display("-")
})
btn1.addEventListener("click", ()=> {
  display("1")
})
btn2.addEventListener("click", ()=> {
  display("2")
})
btn3.addEventListener("click", ()=> {
  display("3")
})
btnadd.addEventListener("click", ()=> {
  display("+")
})
btndot.addEventListener("click", ()=> {
  display(".")
})
btnzero.addEventListener("click", ()=> {
  display("0")
})
btnequal.addEventListener("click", ()=> {
  calculate();
})

document.onkeyup = e =>{
  if(e.key == 0 || e.key == "Num0"){
    display("0")
  } else if(e.key == "1" || e.key == "Num1"){
    display("1")
  }else if(e.key == "2" || e.key == "Num2"){
    display("2")
  }else if(e.key == "3" || e.key == "Num3"){
    display("3")
  }else if(e.key == "4" || e.key == "Num4"){
    display("4")
  }else if(e.key == "5" || e.key == "Num5"){
    display("5")
  }else if(e.key == "6" || e.key == "Num6"){
    display("6")
  }else if(e.key == "7" || e.key == "Num7"){
    display("7")
  }else if(e.key == "8" || e.key == "Num8"){
    display("8")
  }else if(e.key == "9" || e.key == "Num9"){
    display("9")
  }else if(e.key == "+" || e.key == "Num+"){
    display("+")
  }else if(e.key == "-" || e.key == "Num-"){
    display("-")
  }else if(e.key == "/" || e.key == "Num/"){
    display("/")
  }else if(e.key == "*" || e.key == "Num*"){
    display("*")
  }else if(e.key == "." || e.key == "Num."){
    display(".")
  }else if(e.key == "c" || e.key == "Numc"){
    calculate();
}else{
  alert("INVALID KEY")
}
}
//Note i have wrote in button c.

let outputScreen = document.getElementById("output");
function display(num){
  outputScreen.value += num; 
} 
function calculate(){
  try{
    outputScreen.value = eval(outputScreen.value)
  }
  catch(err){
      alert("invalid")
  }
}
function Clear(){
  outputScreen.value = "";
}
function del(){
  outputScreen.value = outputScreen.value.slice(0,-1);
}