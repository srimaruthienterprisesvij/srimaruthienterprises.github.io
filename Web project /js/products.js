// ===========================================
// Sri Maruthi Enterprises
// Products Page
// ===========================================

function renderProducts(productList) {

    const container = document.getElementById("productsContainer");

    if (!container) return;

    if (!productList || productList.length === 0) {

        container.innerHTML = `
            <div class="no-products">
                <h2>No Products Found</h2>
                <p>Please try another search or filter.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = productList.map(product => `

        <div class="product-card">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-body">

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <p class="product-model">
                    <strong>Model:</strong>
                    ${product.model || "N/A"}
                </p>

                <p class="product-category">
                    ${product.category || ""}
                </p>

                <div class="product-buttons">

                    <a href="product.html?id=${product.id}"
                       class="btn-primary">
                       View Details
                    </a>

                    <a href="https://wa.me/917892588077?text=${encodeURIComponent(
`Hello Sri Maruthi Enterprises,

I am interested in:

${product.name}

Model: ${product.model || "N/A"}

Please send me the quotation.

Thank you.`
                    )}"
                       target="_blank"
                       class="btn-secondary">

                        Get Quote

                    </a>

                </div>

            </div>

        </div>

    `).join("");
}

/* Render Category Dropdown */

function renderProductFilters(productList) {
    const categoryFilter = document.getElementById("categoryFilter");
    const brandFilter = document.getElementById("brandFilter");

    if (categoryFilter) {
        const categories = [...new Set(productList.map(product => product.category || ""))]
            .filter(Boolean)
            .sort();

        categoryFilter.innerHTML = `<option value="All">All Categories</option>`;

        categories.forEach(category => {
            categoryFilter.innerHTML += `
                <option value="${category}">
                    ${category}
                </option>`;
        });
    }

    if (brandFilter) {
        const brands = [...new Set(productList.map(product => product.brand || ""))]
            .filter(Boolean)
            .sort();

        brandFilter.innerHTML = `<option value="All">All Brands</option>`;

        brands.forEach(brand => {
            brandFilter.innerHTML += `
                <option value="${brand}">
                    ${brand}
                </option>`;
        });
    }
}

function renderCategoryCards(categoryList) {
    const container = document.getElementById("categoryContainer");
    if (!container) return;

    container.innerHTML = categoryList.map(category => `
        <div class="category-card">
            <i class="fa ${category.icon}"></i>
            <h3>${category.name}</h3>
        </div>
    `).join("");
}

function renderBrandCards(brandList) {
    const container = document.getElementById("brandContainer");
    if (!container) return;

    container.innerHTML = brandList.map(brand => `
        <div class="brand-card">
            <img src="${brand.logo}" alt="${brand.name}">
            <h3>${brand.name}</h3>
        </div>
    `).join("");
}

function renderCategories(categoryList) {

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (!categoryFilter) return;

    categoryFilter.innerHTML =
        `<option value="All">All Categories</option>`;

    categoryList.forEach(category => {

        categoryFilter.innerHTML += `
            <option value="${category.name}">
                ${category.name}
            </option>
        `;

    });

}

/* Render Brand Dropdown */

function renderBrands(brandList) {

    const brandFilter =
        document.getElementById("brandFilter");

    if (!brandFilter) return;

    brandFilter.innerHTML =
        `<option value="All">All Brands</option>`;

    brandList.forEach(brand => {

        brandFilter.innerHTML += `
            <option value="${brand.name}">
                ${brand.name}
            </option>
        `;

    });

}