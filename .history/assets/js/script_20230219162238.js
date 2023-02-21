const navItems = document.querySelectorAll(".nav-list__item");
const navHover = document.querySelector(".nav-list__item--effect");
const nav = document.querySelector(".nav");
const header = document.querySelector("#header");

const containerItems = document.querySelectorAll(".container-item");
let arrTop = [];
[...containerItems].forEach((item) => {
    arrTop.push(item.getBoundingClientRect().y + window.scrollY);
});

//! WINDOW
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener("scroll", debounceFn(handleWindowScroll, 15));
function handleWindowScroll(e) {
    if (window.pageYOffset >= nav.offsetHeight) {
        nav.classList.add("stick");
        header.style.marginTop = `${nav.offsetHeight}px`;
    } else {
        nav.classList.remove("stick");
        header.style.marginTop = `0px`;
    }
}

//! NAV

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
    item.addEventListener("click", handleNavScroll);
});

function handleNavScroll(e) {
    const index = e.target.dataset.index;
    const { top } = containerItems[index].getBoundingClientRect();
    window.scrollTo(0, arrTop[index] - 60);
}
function handleNavItemEnter(e) {
    const { width } = e.target.getBoundingClientRect();
    navHover.style.width = `${width - 24}px`;
    navHover.style.left = `${e.target.offsetLeft + 12}px`;
    e.target.classList.add("nav-list__item--selected");
}
function handleNavItemLeave(e) {
    navHover.style.width = `${0}px`;
    e.target.classList.remove("nav-list__item--selected");
}
