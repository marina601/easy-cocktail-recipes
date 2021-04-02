//jshint esversion: 6

// declaring variables
const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('from_name'); //getting the username from input field
// declaring variables for serviceID and templateID
const serviceID = 'default_service';
const templateID = 'template_rh5u5i9';

(function () {
    // https://dashboard.emailjs.com/admin/integration
    //integrating the emailJS 
    emailjs.init('user_okiyBXoCAcvQ9Zao8GHSK');
})();

//Code was taken from emailJS to set up the initial function
window.onload = function () {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); //preventing default submit 
        btn.value = 'Sending...'; //displaying new button value when sending 

        emailjs.sendForm(serviceID, templateID, this) //sending the form
            .then(() => {
                btn.value = 'Submit';
                alert(`Thank you ${userName.value}. Your message has been sent! We will be in touch soon!`);
                //alert shows to the user when the message has been sent 
                //btn.disabled = true;
                contactForm.reset(); //reset the form on submit 
                
            }, (err) => {
                //error message for the user when the email is not sent 
                btn.value = 'Submit';
                alert(alert(JSON.stringify(err)`Sorry ${userName.value} something went wrong`));
            });

        return false;  // To stop from loading a new page
    });

};







