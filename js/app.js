const loginForm = document.querySelector(".loginForm");
const loginInput = loginForm.querySelector("input");
const h1Title = document.querySelector(".title");
const momentum = document.querySelector(".momentum")

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

function loginSubmit(e){
    e.preventDefault();
    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASS);
    momentum.classList.remove(HIDDEN_CLASS);

    localStorage.setItem(USERNAME_KEY,userName);
    paintTitle(userName);
}

function paintTitle(userName){
    h1Title.classList.remove(HIDDEN_CLASS);
    momentum.classList.remove(HIDDEN_CLASS);
    
    h1Title.innerText = userName + "'s Momentum";
}

const saveName = localStorage.getItem(USERNAME_KEY);

if (saveName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginSubmit)
}else{
    paintTitle(saveName);
}