// ===========================================
// Sri Maruthi Enterprises
// Advanced Product Filter
// ===========================================

let selectedCategory = "All";
let selectedBrand = "All";
let searchKeyword = "";

/* Apply all filters together */
function applyFilters() {

    if (typeof products === "undefined") return;

    let filtered = [...products];

    // Search
    if (searchKeyword.trim() !== "") {
        const keyword = searchKeyword.toLowerCase();

        filtered = filtered.filter(product =>
            (product.name || "").toLowerCase().includes(keyword) ||
            (product.brand || "").toLowerCase().includes(keyword) ||
            (product.model || "").toLowerCase().includes(keyword) ||
            (product.category || "").toLowerCase().includes(keyword)
        );
    }

    // Category Filter
    if (selectedCategory !== "All") {
        filtered = filtered.filter(product =>
            product.category === selectedCategory
        );
    }

    // Brand Filter
    if (selectedBrand !== "All") {
        filtered = filtered.filter(product =>
            product.brand === selectedBrand
        );
    }

    if (typeof renderProducts === "function") {
        renderProducts(filtered);
    }
}

/* Search Box */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchKeyword = this.value;
        applyFilters();
    });
}

/* Category Dropdown */
const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
        selectedCategory = this.value;
        applyFilters();
    });
}

/* Brand Dropdown */
const brandFilter = document.getElementById("brandFilter");

if (brandFilter) {
    brandFilter.addEventListener("change", function () {
        selectedBrand = this.value;
        applyFilters();
    });
}

/* Reset Filters */
function resetFilters() {

    selectedCategory = "All";
    selectedBrand = "All";
    searchKeyword = "";

    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.value = "All";
    if (brandFilter) brandFilter.value = "All";

    applyFilters();
}