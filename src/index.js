import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

homePage();

function navFunctionality() {
    const navHome = document.querySelector(".home");
    const navMenu = document.querySelector(".menu");
    const navAbout = document.querySelector(".about");

    navHome.addEventListener("click", homePage);
    navMenu.addEventListener("click", menuPage);
    navAbout.addEventListener("click", aboutPage);
}

navFunctionality();