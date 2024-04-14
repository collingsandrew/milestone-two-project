/*jshint esversion: 6 */ 

// events listener that sends an email using the amialjs api when the user submits the contact form
// code taken from the emailjs docs https://www.emailjs.com/docs/tutorial/creating-contact-form/
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_9bd1whl', 'template_858quls', this)
            .then(() => {
                alert('Thank you, your message was sent successfully.');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, (error) => {
                alert('Oops, looks like something went wrong, please try again', error);
            });
    });
}