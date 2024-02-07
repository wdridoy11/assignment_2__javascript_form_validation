const loginButton = document.getElementById("login");

loginButton.addEventListener("click",((e)=>{
    e.preventDefault()
    // login form value get
    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    // Login form condition
    if(userName ==="" || userName === null){
        alert("Please enter you User Name")
    }
    else if(password ==="" || password === null){
        alert("Please enter you Password")
    }
    else if(userName.length>0 && password.length>0){
        alert("Login Successful!")
    }

}))