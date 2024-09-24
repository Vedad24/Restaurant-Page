export function menuPage() {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";
    const menuSection = makeEl("div", "menuSection");
    const title = document.createElement("h1");
    title.innerHTML = "Our Menu";
    menuSection.appendChild(title);

    const menu = makeEl("div", "menuItems");
    menuSection.appendChild(menu);

    contentSection.appendChild(menuSection);

    for (let it of food) {
        const newItem = makeEl("div", "item");
        const itemImg = makeEl("img", "itemIMG");
        const itemName = makeEl("h2", "foodTitle");
        const itemDescription = makeEl("p", "");
        const itemPrice = makeEl("h2", "");

        itemImg.src = it.imageUrl;
        newItem.appendChild(itemImg);

        itemName.innerHTML = it.name;
        newItem.appendChild(itemName);

        itemDescription.innerHTML = it.description;
        newItem.appendChild(itemDescription);

        itemPrice.innerHTML = `$${it.price}`;
        newItem.appendChild(itemPrice);

        menu.appendChild(newItem);
    }
}

const food = [
    {
        name: "Spaghetti Carbonara",
        description: "Creamy sauce made with eggs, Parmesan, pancetta, and a dash of black pepper for a rich, authentic taste of Rome.",
        price: 13.99,
        imageUrl: "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg"
    },
    {
        name: "Spaghetti Marinara",
        description: "A light and flavorful tomato-based marinara sauce with fresh herbs, garlic, and a hint of olive oil, perfect for a classic Italian meal.",
        price: 11.99,
        imageUrl: "https://www.recipetineats.com/uploads/2016/06/Seafood-Marinara-Spaghetti_2.jpg",
    },
    {
        name: "Spaghetti Aglio e Olio",
        description: "Simple yet bold, this dish combines spaghetti with garlic, olive oil, red pepper flakes, and parsley for a flavorful kick.",
        price: 10.99,
        imageUrl: "https://www.themediterraneandish.com/wp-content/uploads/2023/10/aglio-e-olio-recipe-2023-7.jpg"
    },
    {
        name: "Tagliatelle Bolognese",
        description: "A rich, slow-simmered meat sauce over wide tagliatelle ribbons for a hearty Italian experience.",
        price: 14.99,
        imageUrl: "https://pastaevangelists.com/cdn/shop/articles/tagliatelle_al_ragu_recipe_pasta_evangelists_1200x1200.jpg?v=1585902655"
    },
    {
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce with garlic, olive oil, and red pepper flakes for a fiery, flavorful kick.",
        price: 12.99,
        imageUrl: "https://theplantbasedschool.com/wp-content/uploads/2024/01/Penne-Arrabbiata-22.jpg"
    },
    {
        name: "Linguine Pesto",
        description: "Fresh basil pesto with pine nuts, Parmesan, and lemon zest, creating a light and fragrant dish.",
        price: 13.99,
        imageUrl: "https://sweetcaramelsunday.com/wp-content/uploads/Linguine-Al-Pesto-220.jpg"
    },
    {
        name: "Tortellini Alfredo",
        description: "Delightful cheese-filled tortellini served in a creamy Alfredo sauce, topped with Parmesan and a hint of garlic.",
        price: 14.49,
        imageUrl: "https://life-in-the-lofthouse.com/wp-content/uploads/2019/03/Tortellini-Alfredo500.jpg"
    },
    {
        name: "Tortellini al Pomodoro",
        description: "Cheese-filled tortellini tossed in a rich, tangy tomato sauce with fresh basil and a sprinkle of Parmesan.",
        price: 13.99,
        imageUrl: "https://www.fattoincasadabenedetta.it/wp-content/uploads/2023/02/tortellini-al-pomodoro-sito-4.jpg"
    },
    {
        name: "Fusilli Alfredo",
        description: "Twisted fusilli pasta in a creamy Alfredo sauce with Parmesan and chicken and a hint of garlic.",
        price: 13.49,
        imageUrl: "https://muchbutter.com/wp-content/uploads/2021/03/118-Much-Butter-Chicken-Alfredo-Fusilli-Pasta-20.jpg"
    },
];

const makeEl = (typeName, className) => {
    let newEl = document.createElement(typeName);
    className != "" ? newEl.classList.add(className) : 1;
    return newEl;
}