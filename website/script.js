// script.js
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Product Section: Use Saved LuxeGlow Images
const productContainer = document.querySelector(".product-list");

function loadProducts() {
    const products = [
        {
            image_link: "images/luxeglow_foundation.png", // Path to foundation image
            name: "LuxeGlow Glowing Foundation",
            description: "Our top-selling foundation offers flawless coverage and nourishes your skin.",
            product_link: "#"
        },
        {
            image_link: "images/luxeglow_lipstick.png", // Path to lipstick image
            name: "LuxeGlow Luxury Lipstick",
            description: "A creamy, cruelty-free lipstick that gives vibrant color with a smooth finish.",
            product_link: "#"
        }
    ];

    productContainer.innerHTML = ""; // Clear any existing content
    products.forEach(product => {
        const productHTML = `
            <div class="product-item" style="margin-bottom: 20px;">
                <img src="${product.image_link}" alt="${product.name}" style="width: 300px; border-radius: 10px; margin-bottom: 10px;">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="${product.product_link}" class="button">View Product</a>
            </div>
        `;
        productContainer.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Load the LuxeGlow products immediately
loadProducts();