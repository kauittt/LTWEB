const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");
const nav = document.querySelector(".header-nav");

//! WINDOW
window.addEventListener("scroll", function (e) {
    if (window.pageYOffset >= 125) {
        console.log("work");
    }
});

//! NAV

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
});

navItems[0].addEventListener("click", function (e) {
    window.scroll(0, 0);
});
navItems[1].addEventListener("click", function (e) {
    window.scroll(0, 1070);
});
navItems[2].addEventListener("click", function (e) {
    window.scroll(0, 1800);
});
navItems[3].addEventListener("click", function (e) {
    window.scroll(0, 2340);
});
navItems[4].addEventListener("click", function (e) {
    window.scroll(0, 3880);
});

function handleNavItemEnter(e) {
    const { width } = e.target.getBoundingClientRect();
    navHover.style.width = `${width - 24}px`;
    navHover.style.left = `${e.target.offsetLeft + 12}px`;
    e.target.classList.add("header-nav-list__item--selected");
}
function handleNavItemLeave(e) {
    navHover.style.width = `${0}px`;
    e.target.classList.remove("header-nav-list__item--selected");
}

window.addEventListener("scroll", (e) => {
    console.log(window.pageYOffset);
});
