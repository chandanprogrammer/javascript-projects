const submit = document.getElementById('submit');
const table = document.querySelector('table');

const showPassword = () => {
    let localData = localStorage.getItem("passwordStore");
    if (localData == null || JSON.parse(localData).length == 0 ) {
        table.innerHTML = `<div class="noFoundData">No any data found </div>`;
    }
    else {
        let arr = JSON.parse(localData);
        let trCreate = "";
        table.innerHTML = `
            <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>
        `;
        arr.forEach(element => {
            trCreate = `
                <tr>
                    <td>${element.website}</td>
                    <td>${element.username} <sup> <img onclick="copyText('${element.username}')" src="./copy-image.png"> </sup> </td>
                    <td>${element.password} <sup> <img onclick="copyText('${element.password}')" src="./copy-image.png"> </sup> </td>
                    <td><button class="delBtn" onclick="deletePassword('${element.website}')">Delete</button></td>
                </tr>
        `;
            table.innerHTML += trCreate;
        });
    }
    website.value = "";
    username.value = "";
    password.value = "";
}
showPassword();

const deletePassword = (website) => {
    let localData = localStorage.getItem("passwordStore");
    let arr = JSON.parse(localData);
    const arrUpdate = arr.filter((e) => {
        return e.website != website;
    })
    localStorage.setItem("passwordStore", JSON.stringify(arrUpdate));
    showToast(deleteSuccess);
    showPassword();
}

const copyText = (text) =>{
    navigator.clipboard.writeText(text).then(
        ()=> {
            showToast(passwordCopy + "  " + text );
        },
        ()=>{
            showToast(passwordNotCopy);
        },
    );
}

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let localData = localStorage.getItem("passwordStore");
    let json;
    if (localData == null) {
        json = [];
    }
    else {
        json = JSON.parse(localData);
    }
    json.push({ website: website.value, username: username.value, password: password.value });
    if(username.value != '' && password.value != ''){
        localStorage.setItem("passwordStore", JSON.stringify(json));
        showToast(submitSuccess);
    }
    else{
        showToast(submitInvalid);
    }
    showPassword();
})




