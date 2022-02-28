import './theme.js';

const toggle = document.querySelector('.toggle');
const menuHolder = document.querySelector('.menu-holder');
const sections = document.querySelectorAll('.content-block, .container-wrapper');
let headerNav = document.querySelectorAll('.primary-nav > a, .toggle');
const style = getComputedStyle(document.body);
let colour = style.getPropertyValue('--portfolio');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const img = document.querySelector('.hero > .img');

function setColour(entryTarget) {
    let cssObj = getComputedStyle(entryTarget);
    let bg = cssObj.getPropertyValue('background-color');

    if (toggle.classList.contains('hidden')) {
        header.style.backgroundColor = bg;
    } else {
        header.style.backgroundColor = 'transparent';
    }

    menuHolder.style.backgroundColor = bg;

    if (header.style.backgroundColor == colour.trim()){
        headerNav.forEach(link => {
            link.style.color = 'white';
        })
    } else {
        headerNav.forEach(link => {
            link.style.color = '';
        })
    }

    if (localStorage.getItem('theme') == 'dark') {
        img.src = 'assets/images/white-mask.png';
    } else {
        img.src = 'assets/images/mask.png';
    }
    return;
}


function runObserver(){
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
    
}

runObserver();

function deleteNav() {
    toggle.innerHTML = '<i class="fas fa-bars"></i>Menu';

    let menuWrapper = document.querySelector('.menu-wrapper');
    toggle.classList.toggle('hidden');
    menuWrapper.classList.remove('show');

    headerReset();
    setTimeout(function () {
        menuWrapper.remove();
    }, 450);
    
    runObserver();
    return;
}


function handleThemeUpdate(e) {
    document.documentElement.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);

    let entryTarget = e.target;
    setColour(entryTarget);
}

function elementCreator() {
    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    menuHolder.appendChild(menuWrapper);

    let menuAside = document.createElement('div');
    menuAside.classList.add('menu-aside');
    menuWrapper.appendChild(menuAside);
    menuAside.addEventListener('click', deleteNav);

    let menu = document.createElement('div');
    menu.classList.add('menu');
    menuWrapper.appendChild(menu);

    let heading = document.createElement('h2');
    heading.textContent = 'Menu';
    heading.classList.add('menu-title');
    menu.appendChild(heading);

    let nav = document.createElement('nav');
    nav.classList.add('nav');
    menu.appendChild(nav);

    let link = document.createElement('a'); 
    link.href ='#about';
    link.classList.add('nav-link');
    link.textContent = 'About me';
    nav.appendChild(link);

    link = document.createElement('a'); 
    link.href ='#tech-stack';
    link.classList.add('nav-link');
    link.textContent = 'Tech';
    nav.appendChild(link);

    link = document.createElement('a'); 
    link.href ='#projects';
    link.classList.add('nav-link');
    link.textContent = 'Projects';
    nav.appendChild(link);

    link = document.createElement('a'); 
    link.href ='#contact';
    link.classList.add('nav-link');
    link.textContent = 'Contact me';
    nav.appendChild(link);

    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', deleteNav);
    })

    let iconsWrapper = document.createElement('div');
    iconsWrapper.classList.add('icons');
    nav.appendChild(iconsWrapper);

    let iconWrapper = document.createElement('a');
    iconWrapper.href = '#';
    iconsWrapper.appendChild(iconWrapper);

    let icon = document.createElement('i');
    icon.classList.add('icon', 'fab', 'fa-facebook-messenger');
    iconWrapper.appendChild(icon);

    iconWrapper = document.createElement('a');
    iconWrapper.href = '#';
    iconsWrapper.appendChild(iconWrapper);

    icon = document.createElement('i');
    icon.classList.add('icon', 'fab', 'fa-facebook-messenger');
    iconWrapper.appendChild(icon);

    iconWrapper = document.createElement('a');
    iconWrapper.href = '#';
    iconsWrapper.appendChild(iconWrapper);

    icon = document.createElement('i');
    icon.classList.add('icon', 'fab', 'fa-facebook-messenger');
    iconWrapper.appendChild(icon);
    
    let themeBtns = document.createElement('div');
    themeBtns.classList.add('theme-wrapper');
    menu.appendChild(themeBtns);

    let themeBtn = document.createElement('button');
    themeBtn.classList.add('theme-btn');
    themeBtn.dataset.colour = 'purple';
    themeBtn.value = 'purple';
    themeBtns.appendChild(themeBtn);

    themeBtn = document.createElement('button');
    themeBtn.classList.add('theme-btn');
    themeBtn.dataset.colour = 'pink';
    themeBtn.value = 'pink';
    themeBtns.appendChild(themeBtn);

    themeBtn = document.createElement('button');
    themeBtn.classList.add('theme-btn');
    themeBtn.dataset.colour = 'dark';
    themeBtn.value = 'dark';
    themeBtns.appendChild(themeBtn);

    return;
}

function headerReset() {
    if(toggle.classList.contains('hidden')){
        header.style.backgroundColor = '';
    }
    else {
        header.style.backgroundColor = 'transparent';
    }
    toggle.style.color = '';
    return;
}

function navMenu() {
    if (toggle.classList.contains('hidden')) {
        toggle.classList.toggle('hidden');
        elementCreator();
        headerReset();
        let menuWrapper = document.querySelector('.menu-wrapper');

        toggle.innerHTML = '<i class="fa-solid fa-x"></i>Menu';

        // Select theme depending on which button clicked
        let themeBtns = document.querySelectorAll('.theme-btn');
        themeBtns.forEach((btn) => {
            btn.addEventListener('click', handleThemeUpdate);
        })

        setTimeout(function () {
            menuWrapper.classList.add('show');
        }, 30);
    } else {
        deleteNav();
    }
}

toggle.addEventListener('click', navMenu);
