export function aboutPage() {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";
    const aboutSection = makeEl("div", "aboutSection");
    contentSection.appendChild(aboutSection);
    const leftGallery = makeEl("div", "gallery");
    const bigPic = document.createElement("img");
    bigPic.src = "https://www.mashed.com/img/gallery/why-pasta-sauce-always-tastes-better-at-a-restaurant/l-intro-1685632784.jpg";
    const leftPic = document.createElement("img");
    leftPic.src = "https://www.bhg.com/thmb/6MhCC0ocQGQlb4PIU8ayEeI4QEI=/1244x0/filters:no_upscale():strip_icc()/RU295936-597ced2f12a2480c8c9828c634de1916.jpg";
    const rightPic = document.createElement("img");
    rightPic.src = "https://www.foodandwine.com/thmb/wKe5ZkGmhqXHiCow-SwRqJmygoY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cacio-e-plantain-FT-RECIPE0721-d750051665df4a84a9a305475f98948c.jpg";
    leftGallery.appendChild(bigPic);
    leftGallery.appendChild(leftPic);
    leftGallery.appendChild(rightPic);
    const rightText = makeEl("div", "aboutText");
    const aboutTitle = makeEl("h1", "title");
    aboutTitle.innerHTML = "About Us";
    const des = makeEl("p", "description");
    des.innerHTML = "Lorem ipsum dolor sit amet consectetur. Diam diam ornare nunc scelerisque amet. Eget nulla pellentesque vivamus ut a. Fermentum cursus praesent tempus condimentum ullamcorper risus nulla vulputate. Convallis dui tincidunt mattis faucibus purus egestas eu diam eget.";
    rightText.appendChild(aboutTitle);
    rightText.appendChild(des);
    aboutSection.appendChild(leftGallery);
    aboutSection.appendChild(rightText);
}

const makeEl = (typeName, className) => {
    let newEl = document.createElement(typeName);
    newEl.classList.add(className);
    return newEl;
}