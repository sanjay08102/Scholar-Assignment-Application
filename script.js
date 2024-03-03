async function login(e) {
    e.preventDefault(); // Corrected method name

    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    const data = {
        username: username,
        password: password
    };
    loginUrl = 'http://localhost:3000/signin';

    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const res = await response.json();
    alert(res.message);
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
  function register(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
  }