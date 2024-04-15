const currdisplay=document.querySelector(".curr-display");
const prevdisplay=document.querySelector(".prev-display");
const number=document.querySelectorAll(".number");
const operand=document.querySelectorAll(".operation");
const clearbtn=document.querySelector(".clear");
const delbtn=document.querySelector(".delete");
const equalbtn=document.querySelector(".equal");

let operation;

function appendnumber(number){
    if(number==="." && currdisplay.innerHTML.includes("."))return;
    currdisplay.innerHTML +=number;
}

function chooseoperation(operand){
    if(currdisplay.innerHTML==="")return;
    compute(operand);
    operation=operand;
    currdisplay.innerHTML=operand;
    prevdisplay.innerHTML=currdisplay.innerHTML;
    currdisplay.innerHTML="";
}

function cleardisplay(){
    currdisplay.innerHTML="";
    prevdisplay.innerHTML="";

}

number.forEach((number) => { 
    number.addEventListener("click",()=>{
        appendnumber(number.innerHTML);
    });
});
operand.forEach((operand) => { 
    operand.addEventListener("click",()=>{
        chooseoperation(operand.innerHTML);
    });
});

clearbtn.addEventListener("click",()=>{
    cleardisplay();
});
equalbtn.addEventListener("click",()=>{
    compute();
    currdisplay.innerHTML=result.innerHTML;
});
delbtn.addEventListener("click",()=>{
    currdisplay.innerHTML=currdisplay.innerHTML.slice(0,-1);
});

function compute(operand){
    let result;
    const previousvalue=parseFloat(prevdisplay.innerHTML);
    const currentvalue=parseFloat(currdisplay.innerHTML);

    if(isNaN(previousvalue)||isNaN(currentvalue))return;
    switch(operand){
        case "+":
            result=previousvalue+currentvalue;
            break;
        case "-":
            result=previousvalue-currentvalue;
            break;
        case "*":
            result=previousvalue*currentvalue;
            break;
        case "/":
            result=previousvalue/currentvalue;
            break;
         default:
            return;   
    }
    currdisplay.innerHTML=result;
}
