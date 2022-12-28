let signup = document.querySelector("#signup");
signup.addEventListener("click", checking);

function validate() {
    let checkName = nameValidate();
    let checkSurname = surnameValidate();
    let checkAddress = addressValidate();
    let checkEmail = emailValidate();
    let checkTel = telValidate();

    if (checkName && checkSurname && checkAddress && checkEmail && checkTel) {
        cookieFunction();
        cookieVerify();
        return true;
    } else {
        return false;
    }
}

function nameValidate() {
    let name = document.querySelector("#firstname").value;
    let name2 = document.querySelector("#firstname");
    let re = /^[A-Z][a-z\s]{2,20}$/;
    if (re.test(name)) {
        name2.style.border = "green solid 4px";
        return true;
    } else {
        name2.style.border = "red solid 4px";
        console.log("Name is required");
        window.history.back();
        return false;
    }
}

function surnameValidate() {
    let surname = document.querySelector("#lastname").value;
    let surname2 = document.querySelector("#lastname");
    let re = /^[A-Z][a-z\s]{2,20}$/;
    if (re.test(surname)) {
        surname2.style.border = "green solid 4px";
        return true;
    } else {
        surname2.style.border = "red solid 4px";
        console.log("Last Name is required");
        window.history.back();
        return false;
    }
}

function addressValidate() {
    let address = document.querySelector("#address").value;
    let address2 = document.querySelector("#address");
    let re = /(\d{1,}) [a-zA-Z0-9\s]{2,6}/;
    if (re.test(address)) {
        address2.style.border = "green solid 4px";
        console.log("Address is required");
        return true;
    } else {
        address2.style.border = "red solid 4px";
        window.history.back();
        return false;
    }
}
function emailValidate() {
    let email = document.querySelector("#email").value;
    let email2 = document.querySelector("#email");
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (re.test(email)) {
        email2.style.border = "green solid 4px";
        return true;
    } else {
        email2.style.border = "red solid 4px";
        console.log("Email is required");
        window.history.back();
        return false;
    }
}

function telValidate() {
    let phoneNumber = document.querySelector("#tel").value;
    let phoneNumber2 = document.querySelector("#tel");
    let re = /^[0][0-9]{9}$/;
    if (re.test(phoneNumber)) {
        phoneNumber2.style.border = "green solid 4px";
        return true;
    } else {
        phoneNumber2.style.border = "red solid 4px";
        console.log("Phone number is required");
        window.history.back();
        return false;
    }
}

function checking() {
    try {
        validate()
    } catch (error) {
        alert(error.message)
    }
}

function cookieFunction() {
    let firstNameStored = document.querySelector("#firstname").value;
    let emailStored = document.querySelector("#email").value;
    let mobileStored = document.querySelector("#tel").value;
    
    document.cookie = `name=${firstNameStored}; expires=${new Date(2022, 11, 1)};`;
    document.cookie = `email=${emailStored}; expires=${new Date(2022, 11, 1)};`;
    document.cookie = `mobile=${mobileStored}; expires=${new Date(2022, 11, 1)};`;

    //const regCookie = `name=${firstNameStored}; email=${emailStored}; mobile=${mobileStored}; expires=${new Date(2022, 10, 1)};`
    //return regCookie;
}

function cookieVerify() {
    if (document.cookie.length != 0) {
        console.log("Cookie Set");
        //alert(document.cookie);
    }
}