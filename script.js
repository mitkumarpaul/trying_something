// JavaScript code to change text on button click
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", () => {
    const contactText = document.querySelector("section h2");
    contactText.textContent = "New Text Changed by JavaScript!";
});
