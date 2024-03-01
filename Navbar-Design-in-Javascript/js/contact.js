let submitBtn = document.querySelector('#submitBtn');


submitBtn.addEventListener(('click'), (e)=>{
    e.preventDefault();
    sendEmail();
    reset(); 
    return false;
})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chandankumar070503@gmail.com",
        Password : "039B534CE313B7A6CD843543FC0647765BAC",
        To : 'chandankumar070503@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}