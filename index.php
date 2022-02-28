<!doctype html>
<html lang="en">
<?php require_once("./_include/head.php"); ?>
    <body>
        <header class="header">
            <a class="skip-nav" href="#main-content">Skip to content</a>
            <nav class="primary-nav nav" role="navigation">
                <a href="" class="logo">...</a>
                <button class="toggle hidden"><i class="fas fa-bars"></i>Menu</button>
            </nav>
        </header>
        <div class="menu-holder"></div>
        <main id="main-content">
            <section id="intro" class="content-block">
                <div class="hero">
                    <div class="hero-content">
                        <h1 class="hero-title">Sam Edwards</h1>
                        <p>A web blah</p>
                        <div class="buttons">
                            <a href="mailto:samedwards9@sky.com" class="button">Contact me!</a>
                            <a href="" class="button">View My CV</a>
                        </div>
                    </div>
                    <img src="assets/images/mask.png" class="img">
                    <div class="explore-wrapper">
                            <a class="explore" href="#about">Let's go<i class="fas fa-chevron-down"></i></a>
                        </div>
                </div>
            </section> 
            <section id="about" class="content-block">
                <div class="container">
                    <h2 class="container-title">About Me</h2>
                    <div class="container-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum maurisnec justo fringilla accumsan. 
                        Integer dictum ultricies ex, quis luctus quam bibendum at. Nulla sed tortor consectetur ligula tristique cursus nec eu ipsum. Mauris ut ante neque. Donec vitae sodales massa, aefficitur tortor.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum maurisnec justo fringilla accumsan. 
                        Integer dictum ultricies ex, quis luctus quam bibendum at. Nulla sed tortor consectetur ligula tristique cursus nec eu ipsum. Mauris ut ante neque. Donec vitae sodales massa, aefficitur tortor.
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
                            <div class="tech-wrapper">
                                <div class="tech">
                                    <h3 class="tech-heading">PHP</h3>
                                </div>
                            </div>
                            <div class="tech-wrapper">
                                <div class="tech">
                                    <h3 class="tech-heading">PHP</h3>
                                </div>
                            </div>
                            <div class="tech-wrapper">
                                <div class="tech">
                                    <h3 class="tech-heading">PHP</h3>
                                </div>
                            </div>
                            <div class="tech-wrapper">
                                <div class="tech">
                                    <h3 class="tech-heading">PHP</h3>
                                </div>
                            </div>
                            <div class="tech-wrapper">
                                <div class="tech">
                                    <h3 class="tech-heading">PHP</h3>
                                </div>
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
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                            <div class="card cbd">
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                            <div class="card argyle">
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                            <div class="card rcv">
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                            <div class="card crb">
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                            <div class="card portfolio">
                                <p>Red Crow Vape is another site I had complete creative control over due to the same
                                    reasons as above.</p>
                                <a href="#" class="button">Click to read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="content-block">
                <div class="container">
                    <h2 class="container-title">Get in touch</h2>
                    <p class="">Using one of the options below</p>
                    <div class="icons">
                        <a href="#"><i class="icon fab fa-facebook-messenger"></i></a>
                        <a href="#"><i class="icon fab fa-instagram"></i></a>
                        <a href="#"><i class="icon far fa-envelope"></i></a>
                    </div>
                </div> 
            </section>
        </main>
        <footer class="footer">
            <div class="copyright">
                <i class="fas fa-copyright"></i>
                <p>... <?php echo date("Y"); ?></p>
            </div>
        </footer>         
        <script type="module" src="js/main.js"></script>
    </body>
</html>