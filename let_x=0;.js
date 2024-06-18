const jet = document.querySelector('#jet')
const btnBet1 = document.getElementById('btn-bet1')
let muliplier = document.querySelector('#zone-value')
let btnBet2 =  document.getElementById('btn2')
const autoBet = document.getElementById('check1')
let autoBet2 = document.getElementById('check2')

/*DEALING WITH THE FINANCECE*/
let TotalBalance = document.querySelector('#balance-value')
let BetAmount = document.getElementById('bet-amount-1')
let BetAmount2 = document.getElementById('bet-amount-2')

let btnCtr=null
let btnCtr2=null
console.warn(btnCtr)
let control = null
let control2 = null
let interDuration = 10000; 
var x=0;
var y=0;
let sec = 1,
min = 1,
millSec = 0;
var cn=0;
setInterval(() => {
var heightlvl = parseFloat(genarate())
animeDuration = (heightlvl+1)*1000
 interDuration = 0+parseFloat(animeDuration)+5000;
//console.log("interval duration "+interDuration)

}, interDuration);

function genarate() {
    x = Math.floor(Math.random(1, 10)*10)
    y= Math.floor(Math.random(1, 10)*100)
     let z = x+"."+y
     var zone = parseFloat(z)
   // console.warn(interDuration)
    return zone;
}

function fly() {

    setInterval(() => {
        increminateMultiplier() 

        jet.style = "background-color:purple"

    genarate()
    
    //console.log(genarate())
    
    //console.log(animeDuration)

 
    //console.warn(interDuration)
       // console.log(animeDuration)
    }, interDuration);
    
}
fly()

function increminateMultiplier() {
    let zonD = parseFloat(genarate()*1000)
    
    setTimeout(()=> {
       
        let counter = setInterval(() => {
       
            millSec++;
        if(millSec/100===1.0){
            sec++;  
            millSec =1;

            
        }
        
        var targetzone = parseFloat(1+animeDuration/1000)
        var currentZone = parseFloat(sec+"."+millSec)

        if(currentZone==targetzone||currentZone>targetzone){
            jet.style = "background-color:green"
            clearInterval(counter)
            setTimeout(() => {
                 sec=1
                millSec=0
                muliplier.innerHTML = "flewAway "+"<br>"+currentZone+"x<br>"
                //alert(currentZone)
                //clearInterval(addBalace)
                //clearInterval(addBalace2)
                //BetAmount.value = 0
                let bStatus= btnBet1.innerText.slice(0,7)
                if(bStatus==="CashOut"){
                    Restart()
                }else{
                   bet()
                }
                btnCtr=1
                let bStatus2= btnBet2.innerText.slice(0,7)

                if(bStatus2==="CashOut"){
                    Restart2()
                }else{
                     bet()
                 }
               
                btnCtr2=1
                
                
            }, 10);
            
            
        }
       
        jet.style = "background-color:orange"
        btnCtr=null         
        btnCtr2=null         
        //Betting Button
        if(btnBet1.innerHTML=="Waiting For Next round"&BetAmount.value<=TotalBalance.innerText&&currentZone<=1.1){
            control=null

            var addBalace = setInterval(() => {
            let CurrentBalace = TotalBalance.innerText
            let targetPrice = parseFloat(1+animeDuration/1000)*BetAmount.value
            let currentPrice = currentZone*BetAmount.value
            
            //SETTING THE BTN TO CORRESPOND WITH THE FLEW AWAY STATE
            if(btnCtr==null){
                btnBet1.innerHTML="CashOut"+"<br>"+parseFloat(sec+"."+millSec)*BetAmount.value
                fBtnBet()
                console.warn(animeDuration-1)


            }
            else if(btnCtr==1){
                console.warn(currentZone+"TargetZone: "+targetzone)

                //btnBet1.innerHTML= "BET"
                //Restart()
                clearInterval(addBalace)
                

            }
            let betStatus = btnBet1.innerHTML.slice(0, 7)
           
            //console.log('TotalBalance.innerText', TotalBalance.innerText)

            //CASHOUT BUTTON
            let CashOut= btnBet1.addEventListener('click',()=>{
                clearInterval(addBalace)

                let SM =parseFloat(sec+"."+millSec)
                if(control==null&btnCtr==null){
                        TotalBalance.innerText=eval(parseFloat(SM)*parseFloat(BetAmount.value)+parseFloat(CurrentBalace))
                        control=1
                        Restart()
                    }
                 else{
                    //TotalBalance.innerHTML =TotalBalance.innerHTML
                } 
              
            })
        },10);  
        }
        else{
           // clearInterval(addBalace)
           // Restart()
        }
        if(btnBet2.innerHTML=="Waiting For Next round"&BetAmount2.value<=TotalBalance.innerText&&currentZone<=1.1){
            
            control=null

            var addBalace2 = setInterval(() => {
            let CurrentBalace2 = TotalBalance.innerText
            let targetPrice2 = targetzone*BetAmount2.value
            let currentPrice2 = currentZone*BetAmount2.value
            
            //SETTING THE BTN TO CORRESPOND WITH THE FLEW AWAY STATE
            if(btnCtr2==null){
                btnBet2.innerHTML="CashOut"+"<br>"+parseFloat(sec+"."+millSec)*BetAmount2.value
                fBtnBet2()

            }else if(btnCtr2==1){
                //btnBet1.innerHTML= "BET"
                //Restart2()
                clearInterval(addBalace2)

            }
            let betStatus = btnBet2.innerHTML.slice(0, 7)
           
            //console.log('TotalBalance.innerText', TotalBalance.innerText)

            //CASHOUT BUTTON
            let CashOut= btnBet2.addEventListener('click',()=>{
                clearInterval(addBalace2)

                let SM2 =parseFloat(sec+"."+millSec)
                if(control2==null&btnCtr==null){
                        TotalBalance.innerText=eval(parseFloat(SM2)*parseFloat(BetAmount2.value)+parseFloat(CurrentBalace2))
                        control2=1
                        Restart2()
                    }
                 else{
                    //TotalBalance.innerHTML =TotalBalance.innerHTML
                } 
              
            })
        },10);  
        }
        else{
            clearInterval(addBalace2)
           // Restart()
        }

        muliplier.innerHTML = sec+"."+millSec
        }
    , 10);
    
    console.log(animeDuration/1000)

    aviAnimate() 

    }
    
    , interDuration); 
    
}
function aviAnimate() {
    jet.animate([
        {
            transform: "translate(0vw, 0vw)",
            offset:0.1
            
        },
     {
            transform: "translate(8vw,-4vw)",
    
        },{
            transform: "translate(16vw,-8vw)"
    
        }, 
      {
            transform: "translate(32vw,-16vw)"
    
        }, 
    {
            transform: "translate(64vw,-32vw)"
    
        },{
            transform:"translate(64vw,-30vw)",
            
        },
        {
            transform:"translate(128vw,-64vw)",
            
        }
    ], {
        duration:animeDuration,
        easing:"ease-in",
        iterations:1
        })
    
}

 increminateMultiplier() 
 bet()
 Restart()

function bet() {
    btnBet1.addEventListener('click',()=>{
        if(btnBet1.innerHTML=="BET"){
            btnBet1.style="background-color:red"
            btnBet1.innerText="Waiting For Next round"
            ///btnBet1.innerText += "\n"+parseFloat(BetAmount.value)
            BetAmount.style="background-color:orange"
            TotalBalance.innerText = parseFloat(TotalBalance.innerText-BetAmount.value)
            
        }if(BetAmount.value<1||BetAmount.value>200){
            alert("Bet not placed, Amount must be between R1 -R200")
            Restart()
        }
         else if (btnBet1.innerHTML=="Waiting For Next round"&BetAmount.value>TotalBalance.innerText){
               Restart()
            }
 
        //console.log(TotalBalance)
    });
    btnBet2.addEventListener('click',()=>{
        if(btnBet2.innerHTML=="BET"){
            btnBet2.style="background-color:red"
            btnBet2.innerText="Waiting For Next round"
            ///btnBet1.innerText += "\n"+parseFloat(BetAmount.value)
            BetAmount2.style="background-color:orange"
                TotalBalance.innerText = parseFloat(TotalBalance.innerText-BetAmount2.value)
            
        }if(BetAmount2.value<1||BetAmount2.value>200){
            alert("Bet not placed, Amount must be between R1 -R200")
            Restart2()
        }
         else if (btnBet2.innerHTML=="Waiting For Next round"&BetAmount2.value>TotalBalance.innerText){
               Restart2()

            }
        });
}

 function addAmout(input){
    let amout=BetAmount.value=input
    return amout;
    
}

function addAmout2(input){
    BetAmount2.value=input
}
function Restart(){
    btnBet1.innerHTML = "BET"
    btnBet1.style = "background-color:green"

}
function Restart2(){
    btnBet2.innerHTML = "BET"
    btnBet2.style = "background-color:green"

}    
function fBtnBet() {
    btnBet1.style = "background-color: orange"
}  
function fBtnBet2() {
    btnBet2.style = "background-color: orange"
}        
            
