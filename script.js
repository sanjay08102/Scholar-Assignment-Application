var url = 'http://localhost:3000/'
async function login(e) {
    e.preventDefault(); // Corrected method name

    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    const data = {
        username: username,
        password: password
    };
    loginUrl = url + 'login';

    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const res = await response;
    if(res.status == 200)  {
        alert("Login successfully")
    } else {
        alert("User Not found");
    } 
    window.location.reload(); 
}

function Changecolor(type) {
    if (type === "txt") {
        var uicon = document.querySelector(".fa-user");
        uicon.style.color = "#39d39f";
    } else if (type === "pass") {
        var uicon = document.querySelector(".fa-lock");
        uicon.style.color = "#39d39f";
    }
}

function backtonormal(type) {
    if (type == "txt") {
        var uicon = document.querySelector(".fa-user")
        uicon.style.color = "#dcdada";
        var txtbox = document.getElementById("uname");
        txtbox.style.border = "none";
    } else if (type == "pass") {
        var uicon = document.querySelector(".fa-lock")
        uicon.style.color = "#dcdada";
    }
}
window.onload = () => {
    document.querySelector(".fa-user").style.color = "#dcdada";
    document.querySelector(".fa-lock").style.color = "#dcdada";
};
async function register() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("psw").value;
    var passRepeat = document.getElementById("psw-repeat").value;
    var regex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    var arith = regex.test(pass);
    // var arith = true;s
    if (arith) {
        if (pass == passRepeat) {
            const regData = {
                email: email,
                password: pass
            };
            var RegistrationUrl = url + 'Registration';

            const response = await fetch(RegistrationUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regData)
            })
            const res = await response.json();
           alert(res.message)
            window.location.reload();

        }else {
        alert("Password doesn't match...Try again");
    } 
} else {
    alert("Password should atleast obtain 1 special character,capital letter")
}
}