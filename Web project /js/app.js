// ===========================================
// Sri Maruthi Enterprises
// app.js
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();
    initMobileMenu();
    initBackToTop();
    initSmoothScroll();
    setActiveNavigation();

});

// ===============================
// Sticky Header
// ===============================

function initStickyHeader() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

}

// ===============================
// Mobile Menu
// ===============================

function initMobileMenu() {

    const menuBtn = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

}

// ===============================
// Back To Top
// ===============================

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// Smooth Scroll
// ===============================

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

}

// ===============================
// Active Navigation
// ===============================

function setActiveNavigation() {

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (href === "index.html" && currentPage === "")) {
            link.classList.add("active");
        }

    });

}

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});