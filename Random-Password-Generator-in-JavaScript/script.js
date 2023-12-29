const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "@#$*";

let display = document.getElementById("display");
let passwordLength = document.getElementById("passwordLength");
let upperChar = document.getElementById("upperChar");
let lowerChar = document.getElementById("lowerChar");
let numberChar = document.getElementById("numberChar");
let symbolChar = document.getElementById("symbolChar");
let generate = document.getElementById("generate");


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if (upperChar.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerChar.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberChar.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolChar.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < passwordLength.value) {
        return generatePassword(password);
    }
    // console.log(truncateString(password, passLength.value));
    display.innerText = truncateString(password, passwordLength.value);
}

// Tream a String Value According to length 
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}

generatePassword();

// Click on Button 
generate.addEventListener("click", function () {
    generatePassword();
})

