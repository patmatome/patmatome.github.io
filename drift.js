
/** importing html elements to my javascript txt file for functionality and
 * modification
*/

function sendEmail(){
  let params={
                name:document.getElementById('name').value,
                email:document.getElementById('user-email').value,
                message:document.getElementById('enqueryMessege').value

            }

           
            emailjs.send("service_vtzxchl", "template_qlxz9e4", params).then((response)=> {
      console.log('SUCCESS!');
       alert("THANK YOU YOU'R MESSEGE HAS BEEN SUCCCEFULLY SENT I'LL BE IN TOUCH..." )               
    }, function(error) {
      console.log('FAILED...', error);
    });
     

}
   
