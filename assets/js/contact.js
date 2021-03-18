//jshint esversion: 6
// Sending the form 

const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
// identifying submit button 
const message = document.getElementById("enquire").value.trim();
const emailV = document.getElementById("from_email").value.trim();

contactForm.addEventListener('submit', function(event) {
   event.preventDefault(); //preventing default submit 

  
   btn.value = 'Sending...'; //displayin new message when sending 

   const serviceID = 'default_service';
   const templateID = 'template_rh5u5i9';

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





 


