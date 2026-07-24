// js/load-data.js

let products = [];
let categories = [];
let brands = [];

/* Load all JSON files */
async function loadWebsiteData() {
    try {

        const [productsRes, categoriesRes, brandsRes] = await Promise.all([
            fetch("data/products.json"),
            fetch("data/categories.json"),
            fetch("data/brands.json")
        ]);

        products = await productsRes.json();
        categories = await categoriesRes.json();
        brands = await brandsRes.json();

        console.log("Products Loaded:", products.length);
        console.log("Categories Loaded:", categories.length);
        console.log("Brands Loaded:", brands.length);

        if (typeof renderProducts === "function") {
            renderProducts(products);
        }

        if (typeof renderProductFilters === "function") {
            renderProductFilters(products);
        }

        if (typeof renderCategoryCards === "function") {
            renderCategoryCards(categories);
        }


        if (typeof renderBrandCards === "function") {
            renderBrandCards(brands);
        }

    } catch (error) {
        console.error("Error loading website data:", error);
    }
}

/* Get product by ID */
function getProductById(id) {
    return products.find(product => Number(product.id) === Number(id));
}

/* Search products */
function searchProducts(keyword) {
    keyword = keyword.toLowerCase();

    return products.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        (product.model && product.model.toLowerCase().includes(keyword))
    );
}

/* Filter by category */
function filterByCategory(category) {
    if (category === "All") return products;

    return products.filter(product =>
        product.category === category
    );
}

/* Filter by brand */
function filterByBrand(brand) {
    if (brand === "All") return products;

    return products.filter(product =>
        product.brand === brand
    );
}

/* Load automatically */
document.addEventListener("DOMContentLoaded", loadWebsiteData);