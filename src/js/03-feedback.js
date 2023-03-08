const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const textSpace = document.querySelector('textarea[name="message"]');
const btn = document.querySelector('button[type="submit"]');
const storageValue = {
    email: email.value,
    textSpace: textSpace.value
};

const change = (e) => {
    
    const valueFromStorage = localStorage.getItem("feedback-form-state");
    const objFromStorage = JSON.parse(valueFromStorage);
localStorage.setItem("feedback-form-state", JSON.stringify(storageValue))
 
}

form.addEventListener('input', change);


