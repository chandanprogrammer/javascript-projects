const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const qrCode = document.querySelector('#qrCode');

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const imageURL = url.concat(userInput.value);
    if (userInput.value == "") {
        alert('Please enter text or URL')
    }
    else {
        qrCode.innerHTML = ` <img src="${imageURL}" alt="QR code"> `;
    }
})