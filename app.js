// STICKY NAVBAR & BACK TO TOP BUTTON

const scrollNav = document.querySelector("nav");
const btnTop = document.querySelector(".backtotop-container");

window.addEventListener("scroll", function () {
    if (window.scrollY > 75) {
        scrollNav.classList.add("nav-sticky");
    } else if (window.scrollY <= 75) {
        scrollNav.classList.remove("nav-sticky");
    }

    if (window.scrollY > 150) {
        btnTop.classList.add("backtotop-container");
    } else if (window.scrollY <= 150) {
        btnTop.classList.remove("backtotop-container");
    }
});

// TOGGLE BUTTON
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// SECTION CLICK EXACT PLACEMENT
const scrollLink = document.querySelectorAll(".scroll-link");
const navbar = document.querySelector("nav");

scrollLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
        //prevent default
        e.preventDefault();
        //go to specific section with exact placement
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;

        if (window.scrollY < 75) {
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

// FOOTER DATE

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Tours JS
const tours = [
    {
        id: 1,
        tourname: "Enchanted Kingdom",
        highlight: "Disk-O-Magic and more fun rides",
        toursimg: "img/EK.png",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat expedita numquam, maiores voluptatum ab nihil porro omnis. Assumenda, molestias!",
    },
    {
        id: 2,
        tourname: "Disneyland",
        highlight: "Disney themed rides and characters",
        toursimg: "img/disneyland.png",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat expedita numquam, maiores voluptatum ab nihil porro omnis. Assumenda, molestias!",
    },
    {
        id: 3,
        tourname: "Universal Studios",
        highlight: "Universal Studios themed rides and characters",
        toursimg: "img/universal.png",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat expedita numquam, maiores voluptatum ab nihil porro omnis. Assumenda, molestias!",
    },
    {
        id: 4,
        tourname: "Legoland",
        highlight: "Lego themed rides and characters",
        toursimg: "img/legoland.png",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat expedita numquam, maiores voluptatum ab nihil porro omnis. Assumenda, molestias!",
    },
];

const toursImg = document.getElementById("toursimg");
const tourName = document.getElementById("tourname");
const highlight = document.getElementById("highlight");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showTour();
});

function showTour() {
    const item = tours[currentItem];
    toursimg.src = item.toursimg;
    tourName.textContent = item.tourname;
    highlight.textContent = item.highlight;
    info.textContent = item.info;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > tours.length - 1) {
        currentItem = 0;
    }
    return showTour();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = tours.length - 1;
    }
    return showTour();
});
