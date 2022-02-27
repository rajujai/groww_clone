
function setFormMessage(formElement, type, message) {

    var messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    // messageElement.classList.remove("form__message--error");
    messageElement.classList.add(`form__message--${type}`)
}

function logIn(e) {
    e.preventDefault();

    let login_form = document.getElementById("login")

    let email = login_form.usermail.value;
    let password = login_form.userpass.value;

    let all_users = JSON.parse(localStorage.getItem("users"))
    // console.log(all_users)


    all_users.forEach(function (user) {

        if (email === user.email && password === user.password) {
            localStorage.setItem("groww-login", true);
            user.loggedIn = true;
            window.location.href = "index.html"
        } else {
            login_form.addEventListener("submit", e => {
                e.preventDefault()
                setFormMessage(login_form, "error", 'Please enter valid credentials')
            })
        }
    })
    localStorage.setItem("users", JSON.stringify(all_users));
}

