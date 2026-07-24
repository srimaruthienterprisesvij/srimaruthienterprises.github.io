// ===========================================
// Sri Maruthi Enterprises
// Product Details Page
// ===========================================

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

async function loadProductDetails() {
    try {

        const response = await fetch("data/products.json");
        const products = await response.json();

        const product = products.find(item => Number(item.id) === Number(productId));

        if (!product) {
            document.getElementById("productDetails").innerHTML = `
                <div class="no-products">
                    <h2>Product Not Found</h2>
                    <p>The requested product does not exist.</p>
                </div>
            `;
            return;
        }

        document.title = `${product.name} | Sri Maruthi Enterprises`;

        document.getElementById("productDetails").innerHTML = `
            <div class="product-detail-wrapper">

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-info">

                    <h1>${product.name}</h1>

                    <h3>${product.brand}</h3>

                    <p><strong>Model :</strong> ${product.model || "N/A"}</p>

                    <p><strong>Category :</strong> ${product.category || "N/A"}</p>

                    <p>${product.description || ""}</p>

                    <h2>Features</h2>

                    <ul>
                        ${(product.features || [])
                            .map(feature => `<li>${feature}</li>`)
                            .join("")}
                    </ul>

                    <h2>Specifications</h2>

                    <table class="spec-table">
                        ${Object.entries(product.specifications || {})
                            .map(([key, value]) => `
                                <tr>
                                    <td><strong>${key}</strong></td>
                                    <td>${value}</td>
                                </tr>
                            `).join("")}
                    </table>

                    <div class="product-buttons">

                        <a href="${product.brochure || "#"}"
                           class="btn-primary"
                           target="_blank">
                           Download Brochure
                        </a>

                        <a href="https://wa.me/917892588077?text=${encodeURIComponent(
`Hello Sri Maruthi Enterprises,

I am interested in the following product.

Product: ${product.name}
Model: ${product.model || "N/A"}

Please send me the quotation and complete product details.

Thank you.`
                        )}"
                           class="btn-secondary"
                           target="_blank">
                           Request Quote
                        </a>

                    </div>

                </div>

            </div>
        `;

    } catch (error) {

        console.error("Error loading product details:", error);

        document.getElementById("productDetails").innerHTML = `
            <div class="no-products">
                <h2>Something went wrong</h2>
                <p>Unable to load product details. Please try again later.</p>
            </div>
        `;
    }
}

loadProductDetails();