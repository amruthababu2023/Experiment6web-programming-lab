
const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile Phone", price: 20000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Electronics" },
    { name: "T-Shirt", price: 800, category: "Clothing" },
    { name: "Jeans", price: 1500, category: "Clothing" },
    { name: "Novel", price: 400, category: "Books" },
    { name: "Programming Book", price: 600, category: "Books" }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productContainer = document.getElementById("productContainer");

// Function to display products
function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {
        productContainer.innerHTML =
            "<p>No matching products found.</p>";
    }
    else {
        productList.forEach(product => {

            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
            `;

            productContainer.appendChild(card);
        });
    }
}

// Function to search and filter products
function filterProducts() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

// Display all products initially
displayProducts(products);
