const sections = document.querySelectorAll(".content-block, .container-wrapper");
let headerNav = document.querySelectorAll(".primary-nav > a, .toggle");
const style = getComputedStyle(document.body);
let colour = style.getPropertyValue('--portfolio');
const menuHolder = document.querySelector(".menu-holder");
const header = document.querySelector('.header');
const img = document.querySelector(".hero > .img");

// If theme is already set, load theme else loads root
if (localStorage.getItem("theme") != null) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
}

function setColour(entryTarget) {
    let cssObj = getComputedStyle(entryTarget);
    let bg = cssObj.getPropertyValue("background-color");
    header.style.backgroundColor = bg;
    menuHolder.style.backgroundColor = bg;

    if (header.style.backgroundColor == colour.trim()) {
        headerNav.forEach(link => {
            link.style.color = 'white';
        })
    } else {
        headerNav.forEach(link => {
            link.style.color = '';
        })
    }
    if(localStorage.getItem("theme") == "dark"){
        img.src = "assets/images/white-mask.png";
    }
    else {
         img.src = "assets/images/mask.png";
    }
    return;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let entryTarget = entry.target;
            setColour(entryTarget);
        }
    });
}, {
    rootMargin: '-2% 0px -90% 0px',
    threshold: 0
});

sections.forEach(section => {
    observer.observe(section);
});

const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle > i');

function deleteNav() {
    let menuWrapper = document.querySelector(".menu-wrapper");

    toggle.classList.toggle("hidden");
    //menuWrapper.removeEventListener("click", delNavMenu);
    menuWrapper.classList.remove('show');
    menuWrapper.removeEventListener("click", deleteNav);
    setTimeout(function () {
        menuWrapper.remove();
    }, 1000);
}

function navMenu() {
    if (toggle.classList.contains("hidden")) {
        toggle.classList.toggle("hidden");

        let menuWrapper = document.createElement("div");

        menuWrapper.classList.add("menu-wrapper");
        menuHolder.appendChild(menuWrapper);

        //menuWrapper.addEventListener("click", delNavMenu);

        let menu = document.createElement("div");
        menu.classList.add("menu");
        menuWrapper.appendChild(menu);

        let heading = document.createElement("h2");
        let text = document.createTextNode("Where do you wanna go?");
        heading.appendChild(text);
        heading.classList.add("menu-title");
        menu.appendChild(heading);

        let blockWrapper = document.createElement("div");
        blockWrapper.classList.add("block-wrapper");
        menu.appendChild(blockWrapper);

        let block = document.createElement("div");
        block.classList.add("block", "aboutme-block");
        blockWrapper.appendChild(block);

        heading = document.createElement("h3");
        text = document.createTextNode("About me");
        heading.appendChild(text);
        heading.classList.add("block-title");
        block.appendChild(heading);

        block = document.createElement("div");
        block.classList.add("block", "project-block");
        blockWrapper.appendChild(block);

        heading = document.createElement("h3");
        text = document.createTextNode("Projects");
        heading.appendChild(text);
        heading.classList.add("block-title");
        block.appendChild(heading);

        block = document.createElement("div");
        block.classList.add("block", "tech-block");
        blockWrapper.appendChild(block);

        heading = document.createElement("h3");
        text = document.createTextNode("My Stack");
        heading.appendChild(text);
        heading.classList.add("block-title");
        block.appendChild(heading);

        block = document.createElement("div");
        block.classList.add("block", "contact-block");
        blockWrapper.appendChild(block);

        heading = document.createElement("h3");
        text = document.createTextNode("Contact me");
        heading.appendChild(text);
        heading.classList.add("block-title");
        block.appendChild(heading);

        let themeBtns = document.createElement("div");
        themeBtns.classList.add("theme-wrapper");
        menu.appendChild(themeBtns);

        let themeBtn = document.createElement("button");
        themeBtn.classList.add("theme-btn");
        themeBtn.dataset.colour = "purple";
        themeBtn.value = "purple";
        themeBtns.appendChild(themeBtn);

        themeBtn = document.createElement("button");
        themeBtn.classList.add("theme-btn");
        themeBtn.dataset.colour = "pink";
        themeBtn.value = "pink";
        themeBtns.appendChild(themeBtn);

        themeBtn = document.createElement("button");
        themeBtn.classList.add("theme-btn");
        themeBtn.dataset.colour = "dark";
        themeBtn.value = "dark";
        themeBtns.appendChild(themeBtn);

        menuWrapper = document.querySelector(".menu-wrapper");

        toggle.innerHTML = "<i class='fa-solid fa-x'></i>Menu";
        
        function handleThemeUpdate(e) {
            document.documentElement.setAttribute('data-theme', e.target.value);
            localStorage.setItem('theme', e.target.value);
            entryTarget = e.target;
            setColour(entryTarget);
        }

        // Select theme depending on which button clicked
        themeBtns = document.querySelectorAll('.theme-btn');
        themeBtns.forEach((btn) => {
            btn.addEventListener('click', handleThemeUpdate);
        })

        //menuWrapper.addEventListener("click", deleteNav);

        setTimeout(function () {
            menuWrapper.classList.add('show');
        }, 30);
    } else {
        deleteNav();
        toggle.innerHTML = "<i class='fas fa-bars'></i>Menu";
    }
}

toggle.addEventListener("click", navMenu);