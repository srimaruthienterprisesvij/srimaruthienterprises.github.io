// ==========================================
// Sri Maruthi Enterprises
// Advanced Product Search
// ==========================================

let allProducts = [];

// Load product data
fetch("data/products.json")
    .then(response => response.json())
    .then(data => {
        allProducts = data;
    })
    .catch(error => {
        console.error("Unable to load products:", error);
    });

const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("searchSuggestions");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.trim().toLowerCase();

        if (keyword === "") {
            if (suggestionBox) suggestionBox.innerHTML = "";
            return;
        }

        const results = allProducts.filter(product =>

            (product.name || "").toLowerCase().includes(keyword) ||

            (product.brand || "").toLowerCase().includes(keyword) ||

            (product.model || "").toLowerCase().includes(keyword) ||

            (product.category || "").toLowerCase().includes(keyword)

        );

        showSuggestions(results);

    });

}

// Display Suggestions
function showSuggestions(products) {

    if (!suggestionBox) return;

    suggestionBox.innerHTML = "";

    if (products.length === 0) {

        suggestionBox.innerHTML =
            "<div class='search-item'>No products found</div>";

        return;

    }

    products.slice(0,8).forEach(product => {

        suggestionBox.innerHTML += `

<div class="search-item"
onclick="openProduct(${product.id})">

<strong>${product.name}</strong><br>

<small>${product.brand} | ${product.model}</small>

</div>

`;

    });

}

// Open Product

function openProduct(id){

window.location.href=`product.html?id=${id}`;

}

// Press Enter

if(searchInput){

searchInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

e.preventDefault();

const keyword=this.value.toLowerCase();

const first=allProducts.find(product=>

product.name.toLowerCase().includes(keyword) ||

product.model.toLowerCase().includes(keyword) ||

product.brand.toLowerCase().includes(keyword)

);

if(first){

window.location.href=`product.html?id=${first.id}`;

}

}

});

}

