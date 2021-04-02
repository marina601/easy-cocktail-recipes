//jshint esversion: 6

// declaring variables
const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('from_name');

// declaring variables for serviceID and templateID
const serviceID = 'default_service';
const templateID = 'template_rh5u5i9';

/**
 * function which integrates emailJS service  
 * this code has been used from emailJS documents 
 * https://dashboard.emailjs.com/admin/integration
 */

(function () {

    emailjs.init('user_okiyBXoCAcvQ9Zao8GHSK');
})();

/**
 * To set up intial stracture of this function the code was used from emailJS documentation 
 * on submit add event listener 
 * prevent default submit 
 * button value changes once the button is pressed 
 */

window.onload = function () {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Sending...';

        /**
         * Submitting the form 
         * Submit button value changed to submit once the form is sent 
         * time out function to disable the submit button once the form has been submitted 
         * Alert letting the user know the message has been sent
         * Reset the form 
         * Incase of an error 
         * Submit button is disabled 
         * Alert shows letting the user know the message has not been sent 
         */

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Submit';
                setTimeout(() => { btn.disabled = true; }, 3000);
                alert(`Thank you ${userName.value}. Your message has been sent! We will be in touch soon!`);
                contactForm.reset();

            }, (err) => {

                btn.value = 'Submit';
                btn.disabled = true;
                alert(alert(JSON.stringify(err)`Sorry ${userName.value} something went wrong`));
            });
        // To stop from loading a new page
        return false;
    });

};







