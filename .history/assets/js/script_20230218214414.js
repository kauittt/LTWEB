const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--effect");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemEnter);
    item.addEventListener("mouseleave", handleNavItemLeave);
});

navItems[0].addEventListener("click", function (e) {});

navItems[1].addEventListener("click", function (e) {});

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

window.addEventListener("scroll", function (e) {
    console.log(window.pageYOffset);
});

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
};
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
};
async function API() {
    const response = await fetch(
        "https://voicerss-text-to-speech.p.rapidapi.com/?key=undefined&src=Hello%2C%20world!&hl=en-us&r=0&c=mp3&f=8khz_8bit_mono",
        options
    );
    const data = await response.json();
    console.log(data);
}

API();
