<!doctype html>
<html lang="en">
<?php require_once("./_include/head.php"); ?>
<body>
    <header class="header">
        <a class="skip-nav" href="#main-content">Skip to content</a>
        <nav>
            <div class="logo-wrapper"><a href="" class="logo">Sam Edwards</a></div>
            <div class="button-wrapper">
                <button class="toggle hidden"><i class="fas fa-bars"></i>Menu</button>
            </div>
            <div class="menu-wrapper">
                <div class="menu-aside"></div>
                <div class="menu">
                    <h2>Menu</h2>
                    <menu>
                        <a href="#about">About me</a>
                        <a href="#tech-stack">Technologies I use</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact me</a>
                    </menu>
                    <div class="theme-wrapper">
                        <button class="theme-btn" data-colour="purple" value="purple"></button>
                        <button class="theme-btn" data-colour="pink" value="pink"></button>
                        <button class="theme-btn" data-colour="dark" value="dark"></button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <aside id="social-media">
        <div class="icons">
            <a href="https://www.linkedin.com/in/sam-edwards141" rel="external"><i class="icon fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/WS269058" rel="external"><i class="icon fa-brands fa-github"></i></a>
        </div>
    </aside>
    <main id="main-content">
        <section id="intro" class="content-block">
            <div class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">Sam Edwards</h1>
                    <p>A web developer</p>
                    <div class="buttons">
                        <a href="mailto:samedwards9@sky.com" class="button">Contact me!</a>
                        <a href="" class="button">View My CV</a>
                    </div>
                </div>
                <img src="assets/images/mask.png" class="img" alt="Line art of myself">
                <div class="explore-wrapper">
                    <a class="explore" href="#about">Let's go<i class="fas fa-chevron-down"></i></a>
                </div>
            </div>
        </section>
        <section id="about" class="content-block">
            <div class="container">
                <h2 class="container-title">About Me</h2>
                <div class="container-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum maurisnec justo fringilla
                        accumsan.
                        Integer dictum ultricies ex, quis luctus quam bibendum at. Nulla sed tortor consectetur ligula
                        tristique cursus nec eu ipsum. Mauris ut ante neque. Donec vitae sodales massa, aefficitur
                        tortor.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum maurisnec justo fringilla
                        accumsan.
                        Integer dictum ultricies ex, quis luctus quam bibendum at. Nulla sed tortor consectetur ligula
                        tristique cursus nec eu ipsum. Mauris ut ante neque. Donec vitae sodales massa, aefficitur
                        tortor.
                    </p>
                </div>
                <img class="img" src="assets/images/placeholder.png" alt="A photo of myself">
            </div>
        </section>

        <section id="tech-stack" class="content-block">
            <div class="hero">
                <div class="sticky">
                    <h2 class="hero-title">My Stack:</h2>
                </div>
                <div class="tech-holder">
                    <div class="tech-wrapper html">
                        <h3>HTML</h3>
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div class="tech-wrapper css">
                        <h3>CSS</h3>
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="tech-wrapper js">
                        <h3>JS</h3>
                        <i class="fa-brands fa-js"></i>
                    </div>
                    <div class="tech-wrapper php">
                        <h3>PHP</h3>
                        <i class="fa-brands fa-php"></i>
                    </div>
                    <div class="tech-wrapper sql">
                        <h3>MYSQL</h3>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" class="content-block">
            <div class="container-wrapper">
                <div class="container">
                    <h2 class="container-title">Projects</h2>
                    <div class="cards">
                        <div class="card management">
                            <p>
                                Staff training and course enrolment system.
                                <br><br>
                                Built with HTML, CSS, PHP, MYSQL, jQuery, and Bootstrap.
                            </p>
                            <a href="https://ws269058-wad.remote.ac" class="button" rel="external">View site</a>
                            <a href="https://github.com/WS269058/MultiAccessPlatform" class="button" rel="external">View GitHub repo</a>
                        </div>
                        <!-- <div class="card cbd">
                            <p></p>
                            <a href="https://cbdearth.co.uk" class="button" rel="external">View site</a>
                        </div> -->
                        <div class="card argyle">
                            <p>
                                Argyle works is a website for a property management company which details a public consultation for a planning proposal.
                                <br><br>
                                This was built with HTML, SCSS, and jQuery.
                            </p>
                            <a href="https://argyleworks.co.uk" class="button" rel="external">View site</a>
                        </div>
                        <div class="card rcv">
                            <p>
                                Red Crow Vape is a Vape website that I built using WordPress and the WooCommerce plugin.
                                <br><br>
                                The client wished to have an online presence as well as their physical store location to sell vaping products.
                            </p>
                            <a href="https://redcrowvape.remote.ac" class="button" rel="external">View site</a>
                        </div>
                        <div class="card crb">
                            <p>
                                CRB is a chartered account website that I built using WordPress.
                                <br><br>
                                WordPress was requested by the client as they wished to have a blogging platform.
                            </p>
                            <a href="https://crb1.co.uk" class="button" rel="external">View site</a>
                        </div>
                        <div class="card portfolio">
                            <p>
                                My portfolio site.
                                <br><br>
                                Built with HTML, SCSS, JS, and PHP.
                            </p>
                            <a href="https://github.com/WS269058/Portfolio" class="button" rel="external">View GitHub repo</a>
                        </div>
                        <div class="card iot">
                            <p>
                                Website dashboard for a virtual household management system.
                                <br><br>
                                Built with HTML, SCSS, JS, PHP, and SQL. 
                            </p>
                            <a href="https://ws269058-iot.remote.ac" class="button" rel="external">View site</a>
                            <a href="https://github.com/WS269058/IOT" class="button" rel="external">View GitHub repo</a>
                        </div>
                        <div class="card awt">
                            <p>
                                A WordPress theme that I built from scratch as part of my university studies.
                                <br><br>
                                Built with HTML, SCSS, JS, PHP, and the ACF plugin for WordPress.

                            </p>
                            <a href="https://ws269058-awt.remote.ac" class="button" rel="external">View site</a>
                            <a href="https://github.com/WS269058/ThemeDev" class="button" rel="external">View GitHub repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="content-block">
            <div class="container">
                <h2 class="container-title">Get in touch</h2>
                <p>Using one of the options below</p>
                <div class="icons">
                    <a href="https://www.linkedin.com/in/sam-edwards141" rel="external"><i class="icon fa-brands fa-linkedin"></i></a>
                    <a href="mailto:samedwards9@sky.com"><i class="icon far fa-envelope"></i></a>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="copyright">
            <i class="fas fa-copyright"></i>
            <p>Sam Edwards <?php echo date("Y"); ?></p>
        </div>
    </footer>
    <script type="module" src="js/main.js"></script>
</body>
</html>