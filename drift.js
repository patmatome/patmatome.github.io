/** importing html elements to my javascript txt file for functionality and
 * modification
*/
var userNameInput =document.getElementById('name')
var userEmailInput = document.getElementById('user-email')
var userMsg = document.getElementById('to-user-input');
var form = document.getElementById('form');
var enquery = document.getElementById('enqueryMessege');

/* taking user input*/
form.addEventListener("submit",(event) =>{
    event.preventDefault()
});
function sendEmail(){
    try {
        if(userNameInput.value==""||userEmailInput.value==""||userNameInput.value==null){

            userMsg.style="color:red; font-style:italic;"        
            userMsg.innerHTML = "PLEASE ENTER ALL REQUIRED DETAILS!!!"
        }
        else if(enquery.value.length<=3){
            userMsg.style="color:yellow; font-style:italic;"     
            var name = userNameInput.value
            userMsg.innerHTML=name.toUpperCase()+" your message must have atleast two word!!"  
            }
        else{
            userMsg.style="color:green; font-style:italic;"     
            var name = userNameInput.value
            userMsg.innerHTML="THANK YOU "+name.toUpperCase()+", YOU'R MESSEGE HAS BEEN SUCCCEFULLY SENT I'LL BE IN TOUCH..."  
            emails.send("service_vtzxchl", "template_qlxz9e4");
        }
        
    } catch (error) {
        error= userMsg.innerText= "Please Enter all required Inputs"
        
    }
    

}
   
