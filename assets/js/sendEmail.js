// function that allows the user to submit the form and send an email, using the emailjs api
function sendEmail() {
    let params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        content_text: document.getElementById('form-content').value
    }
    emailjs.send('outlook', 'template_0qcfqfb', params).then(function(response) {
        alert('SUCCESS! ', response.status, response.text);
    },
    function (error) {
        alert('FAILED!', error);
    });
}