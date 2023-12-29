let toastBox = document.querySelector('.toastBox');

let submitSuccess = '<i class="fa-solid fa-circle-check"></i> Submit successfull';
let submitInvalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again! ';
let deleteSuccess = '<i class="fa-solid fa-circle-check"></i> Delete successfull';
let passwordCopy = '<i class="fa-solid fa-circle-check"></i>copied -';
let passwordNotCopy = '<i class="fa-solid fa-circle-xmark"></i> Copied failed error';


function showToast(msg) {
    let div = document.createElement('div');
    div.classList.add('tostsmsg');
    div.innerHTML = msg;
    toastBox.appendChild(div);
    if(msg.includes('error')){
        div.classList.add('error');
    }
    if(msg.includes('Invalid')){
        div.classList.add('invalid');
    }

    setTimeout(()=>{
        div.remove();
    }, 5000)
}