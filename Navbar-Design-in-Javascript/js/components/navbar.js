let navbar = document.querySelector('nav');
const userName = "Chandan";
const password = "1234";
navbar.innerHTML = `
    <div class="navbar">
    <div>
        <h2 class="logo"><img src="../../images/gyancoding-logo.png" alt=""></h2>
    </div>
    <div class="nav-link">
        <ul class="nav-ul">
            <li class="icon mobRespHomeSys"><a href="/"><i class="fa-solid fa-house"></i></a></li>
            <li class="mobRespHome"><a href="/">Home</a></li>
            <li class="mobResp"><a href="/pages/about.html">About</a></li>
            <li class="mobResp"><a href="/tools/option-chain.html">Tools</a></li>
            <li class="mobResp"><a href="/pages/contact.html">Contact</a></li>
            <li class="signBtn mobResp"><button>Sign in</button></li>
            <li class="icon user mobResp"><a href="/"><i class="fa-solid fa-circle-user"></i></i></a></li>
            <div class="icon x-cancle">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </ul>
        <div class="mobileMenuBar"><i class="fa-solid fa-bars"></i></div>
    </div>
    
    </div>
    <div class="loginBox">
    <div class="loginSignupContainer">
        <div class="icon x-icon">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <h2>Welcome Back!</h2>
        <p>Sign in to continue to StockTrader</p>
        <div class="usernameBox">
            <label for="username"></label>
            <input type="text" name="username" id="username" placeholder="Email or Username">
        </div>
        <div class="passwordBox">
            <label for="password"></label>
            <input type="password" name="password" id="password" placeholder="Password">
        </div>
        <p><a href="/">Forgot password?</a></p>
        <div class="signBtn"><button>Sign In</button></div>
        <p class="signup">Don't have an account? <a href="/">Sign up</a></p>
    </div>
    </div>
`;

// Login in or Sign up Logic here 
let navLink = document.querySelector('.nav-link');
if (userName == "Chandan1") {
    if (password == "1234") {
        navLink.classList.add('loginedIN')
    } else {
        console.log("Password Wrong");
    }
}
else {
    navLink.classList.add('notLoginedIN');
}
document.querySelector('.signBtn').addEventListener('click', (e) => {
    document.querySelector(".loginBox").style.display = "flex";

})
document.querySelector('.x-icon').addEventListener(('click'), () => {
    document.querySelector(".loginBox").style.display = "none";
})
document.querySelector('.mobileMenuBar').addEventListener(('click'), ()=>{
    document.querySelector('.nav-ul').style.display = "flex";
})
document.querySelector('.x-cancle').addEventListener(('click'), ()=>{
    document.querySelector('.nav-ul').style.display = "none";
})
