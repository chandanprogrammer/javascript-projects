const fullname = document.getElementById('fullname').value;
const name_error = document.getElementsByClassName('name_error');
console.log(fullname);
if(fullname==""){
    name_error.classList.remove("name_error");
}