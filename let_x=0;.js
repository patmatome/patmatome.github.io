const jet = document.querySelector('#jet')
const btnBet1 = document.getElementById('btn-bet1')
let muliplier = document.querySelector('#zone-value')
let btnBet2 =  document.getElementById('btn2')
let autoBet = document.getElementById('autoBet')
let autoBet2 = document.getElementById('autoBet2')
let aviBackground = document.querySelector('.avi-background')
let cZone2 = document.getElementById('cZone2')
let cZone = document.getElementById('cZone')
let autoCashout = document.getElementById('autoCashout')
let autoCashout2 = document.getElementById('autoCashout2')
let toast = document.getElementById('toastCash')
let C = document.getElementById('C')
let toast2 = document.getElementById('toastCash2')
let toastlvl = document.getElementById('toastLvl')
let toastlvl2 = document.getElementById('toastlvl2')
let C2 = document.getElementById('C2')
console.log(autoCashout2)

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
        
    genarate()
    
    //console.log(genarate())
    
    //console.log(animeDuration)
    if(autoBet.checked&cZone.value>=1.1){
        btnBet1.style="background-color:red"
           btnBet1.innerText="Waiting For Next round"
           ///btnBet1.innerText += "\n"+parseFloat(BetAmount.value)
           BetAmount.style="background-color:orange"
           TotalBalance.innerText = eval(parseFloat(TotalBalance.innerText-BetAmount.value))
   }
   console.warn("c")
   if(autoBet2.checked&cZone2.value>=1.1){
    btnBet2.style="background-color:red"
       btnBet2.innerText="Waiting For Next round"
       ///btnBet1.innerText += "\n"+parseFloat(BetAmount.value)
       BetAmount2.style="background-color:orange"
       TotalBalance.innerText = eval(parseFloat(TotalBalance.innerText-BetAmount2.value))
}
 
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
        backgroundAnimation.play()
        var targetzone = parseFloat(1+animeDuration/1000)
        var currentZone = parseFloat(sec+"."+millSec)

        if(currentZone==targetzone||currentZone>targetzone){
            //jet.style = "background-color:green"
            C.style = "display: none"
            ///toast.innerHTML=""
            C2.style = "display: none"

            clearInterval(counter)
            aviBackground.style = "transform:rotate(0)"
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
                }else if (autoBet.checked){
                   bet()
                }
                btnCtr=1
                backgroundAnimation.pause()

                let bStatus2= btnBet2.innerText.slice(0,7)

                if(bStatus2==="CashOut"){
                    Restart2()
                }else{
                     bet()
                 }
               
                btnCtr2=1
                
            }, 10);
            
          
        }
       
        //jet.style = "background-color:orange"
        btnCtr=null         
        btnCtr2=null         
        //Betting Button

        if(btnBet1.innerHTML=="Waiting For Next round"&BetAmount.value<=TotalBalance.innerText&&currentZone<=1.1){
            control=null
            
            var addBalace = setInterval(() => {
            let CurrentBalace = TotalBalance.innerText
            let targetPrice = parseFloat(1+animeDuration/1000)*BetAmount.value
            let CashoutAim = parseFloat(sec+"."+millSec)
            let stopAim = eval(parseFloat(cZone.value)+0.1)
            
            if(CashoutAim==stopAim&autoCashout.checked){
                console.log("Here..."+CashoutAim)
                setTimeout(() => {
                    C2.style = "display: block"
                    toastlvl2.innerHTML = "Cashout at x "+sec+"."+millSec
                    toast2.innerHTML="R "+eval(parseFloat(BetAmount.value*parseFloat(sec+"."+millSec)))
                }, 1);

                control=1
                bet()
                TotalBalance.innerHTML= eval(parseFloat(TotalBalance.innerHTML)+(cZone.value*BetAmount.value))
                clearInterval(addBalace)
            }
           
            //SETTING THE BTN TO CORRESPOND WITH THE FLEW AWAY STATE
            //SETTING THE BTN TO CORRESPOND WITH THE FLEW AWAY STATE
            if(btnCtr==null){
                btnBet1.innerHTML="CashOut"+"<br>"+parseFloat(sec+"."+millSec)*BetAmount2.value
                fBtnBet()

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
                        setTimeout(() => {
                            C2.style = "display: block"
                            toastlvl2.innerHTML = "Cashout at x "+sec+"."+millSec
                            toast2.innerHTML="R "+eval(parseFloat(BetAmount.value*parseFloat(sec+"."+millSec)))
                        }, 1);

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
            
            control2=null

            var addBalace2 = setInterval(() => {
            let CurrentBalace2 = TotalBalance.innerText
            let targetPrice2 = targetzone*BetAmount2.value
            let currentPrice2 = currentZone*BetAmount2.value
            let CashoutAim2 = parseFloat(sec+"."+millSec)
            let stopAim2 = eval(parseFloat(cZone2.value)+0.1)
           
            if(CashoutAim2==stopAim2&autoCashout2.checked){
                console.log("Here..."+CashoutAim2)
                 setTimeout(() => {
                            C.style = "display: block"
                            toastlvl.innerHTML = "Cashout at x "+sec+"."+millSec
                            toast.innerHTML="R "+eval(parseFloat(BetAmount.value*parseFloat(sec+"."+millSec)))
                            
                        }, 10);
                        control2=1
                bet()
                TotalBalance.innerHTML= eval(parseFloat(TotalBalance.innerHTML)+(cZone2.value*BetAmount2.value))
                clearInterval(addBalace2)
            }
            //SETTING THE BTN TO CORRESPOND WITH THE FLEW AWAY STATE
            if(btnCtr2==null){
                btnBet2.innerHTML="CashOut"+"<br>"+parseFloat(sec+"."+millSec)*BetAmount2.value
                fBtnBet2()

            }else if(btnCtr2==1){
                //btnBet1.innerHTML= "BET"
                Restart2()
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
                        setTimeout(() => {
                            C.style = "display: block"
                            toastlvl.innerHTML = "Cashout at x "+sec+"."+millSec
                            toast.innerHTML="R "+eval(parseFloat(BetAmount.value*parseFloat(sec+"."+millSec)))
                            
                        }, 10);
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
            transform: "translate(8%,-4%)",
    
        },{
            transform: "translate(16%,-8%)"
    
        }, 
      {
            transform: "translate(32%,-16%)"
    
        }, 
    {
            transform: "translate(64%,-32%)"
    
        },{
            transform:"translate(64%,-32%)",
            
        },
        {
            transform:"translate(128vw,-30vw)",
            
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
   
    //jet.style = "background-color:purple"
console.warn("jj")
    btnBet1.addEventListener('click',()=>{
        if(btnBet1.innerHTML=="BET"){
            btnBet1.style="background-color:red"
            btnBet1.innerText="Waiting For Next round"
            ///btnBet1.innerText += "\n"+parseFloat(BetAmount.value)
            //BetAmount.style="background-color:orange"
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
            //BetAmount2.style="background-color:orange"
            TotalBalance.innerText = parseFloat(TotalBalance.innerText-BetAmount2.value)
            
        }if(BetAmount2.value<1||BetAmount2.value>200){
            alert("Bet not placed, Amount must be between R1 -R200")
            Restart2()
        }
         else if (btnBet2.innerText=="Waiting For Next round"&BetAmount2.value>TotalBalance.innerText){
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

   let backgroundAnimation = aviBackground.animate([ {
        transform: "rotate(0)"
    },
    {
        transform: "rotate(360deg)"
    }],{
        duration:10000,
        easing:"linear",
        iterations: 1
    });
   
    backgroundAnimation.pause()
            
            
            
