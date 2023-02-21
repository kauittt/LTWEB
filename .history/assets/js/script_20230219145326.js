const navItems = document.querySelectorAll(".nav-list__item");
const navHover = document.querySelector(".nav-list__item--effect");
const nav = document.querySelector(".nav");
const header = document.querySelector("#header");

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

window.addEventListener("scroll", debounceFn(handleWindowScroll, 25));

function handleWindowScroll(e) {
    if (window.pageYOffset >= nav.offsetHeight) {
        nav.classList.add("stick");
        header.style.marginTop = `${nav.offsetHeight + nav.style.paddingTop}px`;
    } else {
        nav.classList.remove("stick");
        header.style.marginTop = `0px`;
    }
}

//! NAV

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
});

navItems[0].addEventListener("click", function (e) {
    console.log(e.target.pageY);
});
// navItems[1].addEventListener("click", function (e) {
//     window.scroll(0, 850.4);
// });
// navItems[2].addEventListener("click", function (e) {
//     window.scroll(0, 1580);
// });
// navItems[3].addEventListener("click", function (e) {
//     window.scroll(0, 2140);
// });
// navItems[4].addEventListener("click", function (e) {
//     window.scroll(0, 3650.4);
// });

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

window.onscroll = function (e) {
    console.log(window.pageYOffset);
};
