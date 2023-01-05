const welcomeEl = document.getElementById("welcome-el")
const greetEl = document.getElementById("greet-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser() {
    welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"    
}

greetUser()

function changeGreeting(greeting) {
    // greetEl.textContent = greet + ", Igor."
    greetEl.textContent = `${greeting}, Igor.`
    // greetEl.innerHTML = `${greet}, Igor.`

}

changeGreeting("Hi")