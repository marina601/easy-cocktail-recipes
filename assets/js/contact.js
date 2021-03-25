//jshint esversion: 6
// Sending the form 
// identifying submit button and contact form variables 
const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
//Setting variables for serviceID and templateID
const serviceID = 'default_service';
const templateID = 'template_rh5u5i9';
 
//Code was taken from emailJS to set up the initial function
contactForm.addEventListener('submit', function(event) {
   event.preventDefault(); //preventing default submit 

   btn.value = 'Sending...'; //displaying new button value when sending 

   emailjs.sendForm(serviceID, templateID, this) //sending the form
    .then(() => {
    
      btn.value = 'Submit';
      let userName = document.getElementById('from_name'); //getting the username from input field
      
      alert(`Thank you ${userName.value}. Your message has been sent! We will be in touch soon!`);
      //alert shows to the user when the message has been sent 

      contactForm.reset(); //reset the form on submit 
    
     
    }, (err) => {
        //error message for the user when the email is not sent 
      btn.value = 'Submit';
      alert(alert(JSON.stringify(err)`Sorry ${userName.value} something went wrong`));
      console.log(error);
    });

    
});





 


