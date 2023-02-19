const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");

//! NAV
[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
});

navItems[0].addEventListener("click", function (e) {});

navItems[1].addEventListener("click", function (e) {
    console.log("work");
});

function handleNavItemEnter(e) {
    const { width } = e.target.getBoundingClientRect();
    navHover.style.width = `${width - 24}px`;
    navHover.style.left = `${e.target.offsetLeft + 12}px`;
    e.target.classList.add("header-nav-list__item--selected");
    console.log(navHover.style.left);
}
function handleNavItemLeave(e) {
    navHover.style.width = `${0}px`;
    e.target.classList.remove("header-nav-list__item--selected");
}
