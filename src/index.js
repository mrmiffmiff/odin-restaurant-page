import "../node_modules/modern-normalize/modern-normalize.css";
import home from "./modules/home";
import clearContent from "./modules/clear";
import about from "./modules/about";

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener('click', () => {
    clearContent();
    home();
});

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener('click', () => {
    clearContent();
    about();
});

home();