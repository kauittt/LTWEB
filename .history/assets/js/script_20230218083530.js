const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
});

function handleNavItemEnter(e) {
    const { width, left, top } = e.target.getBoundingClientRect();
    navHover.style.width = width;
}
