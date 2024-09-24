import pastaImage from "./home-pasta.png";

export function homePage() {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";
    contentSection.appendChild(makeEl("div", "home-page"));
    const homeDiv = document.querySelector(".home-page");
    homeDiv.appendChild(makeEl("div", "left"));
    homeDiv.appendChild(makeEl("img", "right"));
    document.querySelector(".right").src = pastaImage;
    document.querySelector(".left").appendChild(makeEl("h1", "des"));
    document.querySelector(".des").innerHTML = "Where every bite of pasta is a journey to Italy.";
    document.querySelector(".left").appendChild(makeEl("button", "buy"));
    const buyButton = document.querySelector(".buy");
    buyButton.innerHTML = "Order Now";
    buyButton.type = "button";
}

const makeEl = (typeName, className) => {
    let newEl = document.createElement(typeName);
    newEl.classList.add(className);
    return newEl;
}