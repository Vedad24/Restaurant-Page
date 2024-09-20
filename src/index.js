import "./styles.css";
import { homePage } from "./home.js";

const display = function () {

    let navbar, homeBtn, menuBtn, aboutBtn;

    const init = function () {
        cacheNav();
        appendEvent();
    }

    const cacheNav = () => {
        navbar = document.querySelector(".navbar");
        homeBtn = document.querySelector(".home");
        menuBtn = document.querySelector(".menu");
        aboutBtn = document.querySelector(".about");
    }

    const appendEvent = () => {
        homeBtn.addEventListener("click", () => {
            homePage.init();
        });
    }

    return {
        init,
    }
}();

document.addEventListener('DOMContentLoaded', () => {
    display.init();
});