const loginButton = document.getElementById("login");
loginButton.addEventListener("click",((e)=>{
    e.preventDefault()
    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;
    if(userName ==="" || userName === null){
        alert("Please enter you User Name")
    }
    else if(password ==="" || password === null){
        alert("Please enter you Password")
    }else if(userName.length>0 && password.length>0){
        alert("Successful")
    }

}))