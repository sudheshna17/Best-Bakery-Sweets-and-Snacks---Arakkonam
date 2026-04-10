document.addEventListener("DOMContentLoaded", function () {

    // Order Now button on home page
    const orderBtn = document.querySelector(".hero-text button");
    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            window.location.href = "menu.html";
        });
    }

    // Highlight current nav link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.style.color = "#ffd6d6";
        }
    });

    // Menu card hover + click effect
    const menuCards = document.querySelectorAll(".menu-card-section");
    menuCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active-card");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active-card");
        });

        card.addEventListener("click", function () {
            menuCards.forEach(function (item) {
                item.classList.remove("selected-card");
            });
            card.classList.add("selected-card");
        });
    });

    // Why Choose Us cards click effect
    const infoCards = document.querySelectorAll(".card");
    infoCards.forEach(function (card) {
        card.addEventListener("click", function () {
            infoCards.forEach(function (item) {
                item.classList.remove("selected-card");
            });
            card.classList.add("selected-card");
        });
    });

    // Back to top button
    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑";
    topBtn.className = "top-btn";
    document.body.appendChild(topBtn);

    topBtn.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});