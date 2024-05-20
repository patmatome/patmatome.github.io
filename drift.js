/** importing html elements to my javascript txt file for functionality and
 * modification
*/
var userNameInput =document.getElementById('name')
var userEmailInput = document.getElementById('user-email')
var userMsg = document.getElementById('to-user-input');

/* taking user input*/
function sendEmail(){
    try {
        if(userNameInput.value==""||userEmailInput.value==""||userNameInput.value==null){

            userMsg.style="color:red"        
            userMsg.innerHTML = "PLEASE ENTER ALL REQUIRED DETAILS"
        }
        else{
            var name = userNameInput.value
            alert("THANK YOU "+name.toUpperCase()+", YOU'R MESSEGE HAS BEEN SUCCCEFULLY SENT I'LL BE IN TOUCH")    
        }
        
    } catch (error) {
        error= userMsg.innerText= "Please Enter all required Inputs"
        
    }
    

}
   
