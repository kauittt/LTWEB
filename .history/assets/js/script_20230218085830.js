const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
});

function handleNavItemEnter(e) {
    const { width } = e.target.getBoundingClientRect();
    navHover.style.width = `${width - 24}px`;
    navHover.style.left = `${e.target.offsetLeft}px`;
    // [...navItems].forEach((item) => {
    //     item.classList.remove("header-nav-list__item--selected");
    // });
    e.target.classList.add("header-nav-list__item--selected");
}

function handleNavItemLeave(e) {
    navHover.style.width = `${0}px`;
    e.target.classList.remove("header-nav-list__item--selected");
}
