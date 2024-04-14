/*jshint esversion: 6 */ 

function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = 'service_9bd1whl';
    const templateID = 'template_858quls';

    emailjs.sendForm(serviceID, templateID, params)
    .then(() => {
        alert('SUCCESS!');
    }, (error) => {
        alert('FAILED...');
    });
}