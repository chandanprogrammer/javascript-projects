const fullname = document.getElementById('fullname').value;
const name_error = document.getElementsByClassName('name_error');

if(fullname==""){
    name_error.classList.remove("name_error");
}