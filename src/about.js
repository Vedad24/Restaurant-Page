export function aboutPage() {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";
}

const makeEl = (typeName, className) => {
    let newEl = document.createElement(typeName);
    newEl.classList.add(className);
    return newEl;
}