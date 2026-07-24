// ===============================
// Hero Slider
// Sri Maruthi Enterprises
// ===============================

const slides = [
{
title: "Professional CCTV & Security Solutions",
subtitle: "Trusted Security Solutions for Homes, Offices & Industries",
image: "images/hero/slide1.jpg"
},
{
title: "Networking Solutions",
subtitle: "Enterprise Networking Products & Installation",
image: "images/hero/slide2.jpg"
},
{
title: "Access Control & Video Intercom",
subtitle: "Smart Security Systems for Modern Buildings",
image: "images/hero/slide3.jpg"
}
];

let currentSlide = 0;

const hero = document.querySelector(".hero");

function changeSlide(){

hero.style.backgroundImage =
`url(${slides[currentSlide].image})`;

document.getElementById("heroTitle").textContent =
slides[currentSlide].title;

document.getElementById("heroSubtitle").textContent =
slides[currentSlide].subtitle;

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

}

changeSlide();

setInterval(changeSlide,5000);

