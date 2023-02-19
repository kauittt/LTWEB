const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
});

function handleNavItemEnter(e) {
    const temp = e.target.getBoundingClientRect();
    console.log(temp);
}
