import "modern-normalize/modern-normalize.css";
import "./styles.css";
import home from "./modules/home";
import clearContent from "./modules/clear";
import about from "./modules/about";
import menu from "./modules/menu"

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener('click', () => {
    clearContent();
    home();
});

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener('click', () => {
    clearContent();
    menu();
})

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener('click', () => {
    clearContent();
    about();
});

home();