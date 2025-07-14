const loginBtn = document.getElementById("loginBtn");
const signBtn = document.getElementById("signBtn");

const loginForm = document.getElementById("loginForm");
const signForm = document.getElementById("registerForm");


const head1 = document.getElementById("text_head1");
const head2 = document.getElementById("text_head2");


// Login text 
const loginText = document.getElementById("loginText");



loginBtn.addEventListener("click", () => {
    // Form Loigc
    loginForm.classList.remove("active");
    signForm.classList.add("active");


    // Text logic
    head1.classList.remove("activeText");
    head2.classList.add("activeText");

    loginText.innerText = "Register to Your account";
})


signBtn.addEventListener("click", () => {

    signForm.classList.remove("active");
    loginForm.classList.add("active");

    // Text logic
    head2.classList.remove("activeText");
    head1.classList.add("activeText");

    loginText.innerText = "Login to Your account";

})


// Login Form
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!/^[^@]+@[^@]+\.[a-z]{2,6}$/.test(email)) {
        alert("Invalid Email")
        return;
    }

    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
        alert("Password must be 6+ chars with a number and special char")
        return;
    }


    window.location.href = "dashboard.html"

    let data = {
        email,
        password
    }
    console.log("form Submitted ", email, password)
    localStorage.setItem("user", JSON.stringify(data)) // Storing user data in local storage

})

// SignUp Form Logic

signForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneno = document.getElementById("phoneno").value.trim();
    const address = document.getElementById("address").value.trim();

    console.log(email, name, phoneno, address)

    if (!name || !email || !phoneno || !address) {
        alert('All Fields are required');
        return;
    }

    if (name.length < 3) {
        alert("Name must be 3+ chars")
        return;
    }

    if (!/^[^@]+@[^@]+\.[a-z]{2,6}$/.test(email)) {
        alert("Invalid Email")
        return;
    }

    if (!/^[6-9]\d{9}$/.test(phoneno)) {
        alert("Invalid Phone Number")
        return;
    }

    if (!/^[a-zA-Z0-9\s,.-/]{10,}$/.test(address)) {
        alert("Enter a valid address (MIN 10 characters)");
        return;

    }

    // alert("Register successful , User Data To local Storage!");

    let data = {
        name, email, phoneno, address
    }

    localStorage.setItem("user", JSON.stringify(data)) // Storing user data in local storage

    window.location.href = "/dashboard.html"


    console.log("User Registered Successfully", name, email, phoneno, address)

}
)


// Password Eye logic

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("loginPassword");

togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
})



window.onload = () => {
    const user = localStorage.getItem("user");


    if (user) {
        window.location.href = "/dashboard.html";

    } else {
        alert("No user data found in localStorage , Login in Again")
    }
}