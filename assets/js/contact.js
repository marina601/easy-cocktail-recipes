console.log("hello");

function sendEmail(contactForm) {
    emailjs.send("service_bike43o", "template_rh5u5i9", {
        "from_name": contactForm.full-name.value, 
        "form_email": contactForm.email-address.value,
        "enquire": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("Email Send", response);
        },
        function(error) {
            console.log("Error", error);
        }
    );
    return false;
};