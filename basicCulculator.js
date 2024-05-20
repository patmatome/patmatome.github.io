const display = document.getElementById("display");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const xValues = document.getElementById("answer");
var qtext = document.getElementById("qtex");


function appendToDisplay(input){

    display.value += input
}
function appendOparator(input){
    if(input==="exp"){
   var base = display.value.length -1
    display.value=display.value=Math.pow(display.value, 2)
    }
    if(input==="sin"){
        display.value = Math.sin(parseInt(display.value))
    }
    if(input==="cos"){
        display.value = Math.cos(parseInt(display.value))
    }
     if(input==="tan"){
        display.value = Math.tan(parseInt(display.value))
    } 
    if(input==="asin"){
        display.value = Math.asin(parseInt(display.value))
    }
     if(input==="pi"){
        display.value = Math.PI
    }
    if(input==="log"){
        display.value = Math.log(parseInt(display.value))
    }
    if(input==="ln"){
        display.value = Math.LN2(parseInt(display.value))
    }
}
function clearDisplay(){
    display.value = "";
}
function solveQuadratic(){
}

function calculate(input){
    try {
        
        display.value = eval(display.value)
    } catch (error) 
    {
        
        display.value="Error"
    }
    
}
function DisplayxValues() {

     const A = parseFloat(a.value)
     const B = parseInt(b.value)
     const C = parseInt(c.value)
     if(isNaN(A)){
        xValues.value="your a velue must be a number!"
    } 
    else if(isNaN(B)){
        xValues.value="your b velue must be number!"
    }
    else if(isNaN(C)){
        xValues.value="your c velue must be number!"
    }
    else {
        
    const x1 = (-B+(Math.sqrt(Math.pow(B, 2)-4*A*C)))/(2*A)
    const x2 = (-B-(Math.sqrt(Math.pow(B, 2)-(4*A*C))))/(2*A)
    qtext.innerHTML = "For the equation: "+A+"+ x&#x00b2 +"+B+"x"+" + "+C
    if(isNaN(x1)||isNaN(x2)){
        xValues.value= "The equation has no Real Roots"
    }
    else{
    xValues.value = "x = "+x1+" or = "+x2
    }
    
    }
}