import './theme.js';

const toggle = document.querySelector('.toggle');
const sections = document.querySelectorAll('.content-block, .container-wrapper');
const links = document.querySelectorAll('.logo, .toggle');
const style = getComputedStyle(document.body);
let primaryColour = style.getPropertyValue('--portfolio');
const img = document.querySelector('.hero > .img');
const menuWrapper = document.querySelector(".menu-wrapper");
const themeBtns = document.querySelectorAll('.theme-btn');
let el;
let menuLinks = document.querySelectorAll("menu > a, .menu-aside");
let header = document.querySelector("header");

runObserver();

function runObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                el = entry.target;
                setColour(el);
                setBG();
            }
        });
    }, {
        rootMargin: '-2% 0px -90% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function setColour(el) {
    let eleStyles = getComputedStyle(el);
    let bg = eleStyles.getPropertyValue('background-color');

    header.style.backgroundColor = bg;

    if (bg === primaryColour.trim() && !menuWrapper.classList.contains("show")) {
        links.forEach(link => {
            link.style.color = "white";
        })
    } else {
        links.forEach(link => {
            link.style.color = "";
        })
    }
}

// Select theme depending on which button clicked
themeBtns.forEach((btn) => {
    btn.addEventListener('click', handleThemeUpdate);
})

function handleThemeUpdate(e) {
    document.documentElement.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);
    setBG();
    el = e.target;
    setColour(el);
}

function setBG() {
    if (localStorage.getItem('theme') === 'dark') {
        img.src = 'assets/images/white-mask.png';
    } else {
        img.src = 'assets/images/mask.png';
    }
}

function navMenu() {
    menuWrapper.classList.add("hidden");
    let timer;
    if (toggle.classList.contains('hidden')) {
        toggle.innerHTML = '<i class="fa-solid fa-x"></i>Menu';

        timer = setTimeout(function () {
            menuWrapper.classList.add('show');

            links.forEach(link => {
                link.style.color = "";
            })

        }, 100);
    } else {
        toggle.innerHTML = '<i class="fas fa-bars"></i>Menu';

        timer = setTimeout(function () {
            menuWrapper.classList.remove('hidden');
        }, 300);

        menuWrapper.classList.remove('show');
    }

    toggle.classList.toggle('hidden');
}

toggle.addEventListener('click', navMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', navMenu);
})

