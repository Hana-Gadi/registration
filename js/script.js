
let uname=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let loginBtn= document.querySelector("#loginBtn");
let signupBtn= document.querySelector("#signupBtn");
let userHome= document.querySelector("#welcomeUser");
let loginEmail= document.querySelector(".loginEmail");
let loginPassword=document.querySelector(".loginPass");

let userInfoArray=[];

// if(localStorage.getItem("userInfoArray") != null){
//     userInfoArray=JSON.parse(localStorage.getItem("userInfoArray"));
//     // displayData();
// }



//------------------------------------------------------- sign up Page ----------------------------------------

// Function to validate user name
function nameValidation(){
    let regx = /^[a-zA-Z0-9_]{3,16}$/;
    if(regx.test(uname.value) == true){
    document.querySelector(".namevalid").classList.replace("d-block","d-none");
     return true;
    }
    document.querySelector(".namevalid").classList.replace("d-none","d-block");
    return false;
}

// Function to validate Email
function emailValidation(){
    let regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regx.test(email.value) == true){
    document.querySelector(".emailvalid").classList.replace("d-block","d-none");
     return true;
    }
    document.querySelector(".emailvalid").classList.replace("d-none","d-block");
    return false;
}

// Function to validate password
function passwordValidation(){
     let regx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if(regx.test(password.value) == true){
        document.querySelector(".passwordvalid").classList.replace("d-block","d-none");
        return true;
       }
       document.querySelector(".passwordvalid").classList.replace("d-none","d-block");
       return false;
}

// Registration Function
function register(){
    if(emailValidation() ==true && passwordValidation()==true && nameValidation()==true ){
        let userInfo={
            userName:uname.value,
            userEmail:email.value,
            userPassword:password.value,
        };
    
        userInfoArray.push(userInfo);
        localStorage.setItem("userInfoArray",JSON.stringify(userInfoArray));
        document.querySelector(".successMsg").classList.replace("d-none","d-block");
        goToHome();

    }
    else{
        document.querySelector(".errorMsg").classList.replace("d-none","d-block");
    }
}


signupBtn.addEventListener("click",register);


//------------------------------------------------------- Login Page ----------------------------------------
// Login  Function
function login(){
    for(let i=0; i<userInfoArray.length;i++){
        if(loginEmail.value !== userInfo.userEmail  || loginPassword.value !== userInfo.userPassword){
            document.querySelector(".loginError").classList.replace("d-none","d-block");

        }
    }
    goToHome();
}

loginBtn.addEventListener("click",login);

// Go To Home Page Function
function goToHome(){
    window.location.href = "index.html";
}












