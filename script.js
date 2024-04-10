"use strict"

document.addEventListener("DOMContentLoaded", (event) => {
    handleEvents();
})

let handleEvents = () => {
    btnSubmit.removeEventListener("click", listeners.click);

    btnSubmit.addEventListener("click", listeners.click);
}

let listeners = {
    click(event) {
        if (event.defaultPrevented) return;

        let button = event.target.classList.contains("clickable");
        let name = document.getElementById("name");
        let form = document.getElementById("form1");
        let error = document.getElementById("nameHelp");
        let card = document.getElementById("kad");
        let nameField = document.querySelector("#kad .card-title");

        if (!button) return;

        if (name.value.toLowerCase().includes("kooda") || name.value.toLowerCase().includes("marzlyqa")) {
            nameField.textContent = name.value.toUpperCase();
            form.classList.add("fade-out-elem");
            card.classList.add("fade-in-elem");
            error.classList.add("errorInvisible");
        } else {
            error.classList.remove("errorInvisible");
        }
    }
}