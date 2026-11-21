/* =====================================================
   NESTORIA - SHARED HEADER & FOOTER
   Single source of truth for the header and footer on
   every page (same markup as the home page).
   Pages place <header class="page-header"></header> and
   <footer class="page-footer"></footer>; this script fills them.
   Pages in a sub-folder set <body data-site-base="../">.
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".page-header");
    const footer = document.querySelector(".page-footer");
    if (!header && !footer) return;

    const base = document.body.dataset.siteBase || "";
    const link = (path) => `${base}${path}`;

    if (header) {
        header.outerHTML = `
    <header class="header">
        <div class="logo-main">
            <a href="${link("index.html")}">
                <img class="nestoria-logo" src="${link("Images/logo.png")}" alt="Nestoria Logo">
            </a>
        </div>

        <ul class="nav-bar">
            <li><a href="${link("index.html")}">Home</a></li>
            <li><a href="${link("listings.html")}">Listings</a></li>
            <li><a href="${link("services.html")}">Services</a></li>
            <li><a href="${link("favorites.html")}">Favorites</a></li>
            <li><a href="${link("blog.html")}">Blog</a></li>
            <li><a href="${link("about us/about.html")}">About</a></li>
        </ul>

        <div class="header-right-side">
            <span class="favorite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.99.99 0 0 0 1.024 0C21.126 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3"/>
                </svg>
            </span>
            <a class="get-started" href="${link("listings.html")}">Get Started</a>
        </div>
    </header>`;
    }

    if (footer) {
        footer.outerHTML = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <a href="${link("index.html")}" class="footer-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>Nestoria</span>
                </a>
                <p class="footer-desc">Discover spaces that feel like home. We connect you with premium properties tailored to your lifestyle and budget.</p>

                <div class="newsletter">
                    <p>Subscribe for new listings</p>
                    <form class="newsletter-form" onsubmit="event.preventDefault();">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="${link("index.html")}">Home</a></li>
                    <li><a href="${link("listings.html")}">Property Listings</a></li>
                    <li><a href="${link("services.html")}">Our Services</a></li>
                    <li><a href="${link("about us/about.html")}">About Us</a></li>
                    <li><a href="${link("blog.html")}">Blog &amp; News</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Help Center / FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contact Us</h4>
                <ul class="contact-info">
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A14.82 14.82 0 0 0 9.18 19.32v1.08c.6 8.12 7.34 14.65 14.82 23.1c7.81-8.82 14.82-15.5 14.82-24.18A14.82 14.82 0 0 0 24 4.5m0 7.7a7.13 7.13 0 1 1-7.13 7.12A7.13 7.13 0 0 1 24 12.2" />
                            </svg>
                        </span>
                        123 Real Estate Blvd,<br>New York, NY 10001
                    </li>
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.852 21.473l2.859-2.858c1.03-1.031 2.316-2.336 2.187-3.788l-.486-5.488c-.16-1.802-2.03-3.839-3.84-3.839H8.866c-1.843 0-3.581 1.554-3.344 4.31c.155 1.812-.84 11.764 10.032 22.636s20.824 9.877 22.636 10.032c2.756.237 4.31-1.501 4.31-3.344v-4.706c0-1.81-2.037-3.68-3.84-3.84l-5.487-.486c-1.452-.129-2.757 1.156-3.788 2.187l-2.858 2.859c-2.54-1.36-5.208-3.238-7.822-5.853c-2.615-2.614-4.494-5.281-5.853-7.822" />
                            </svg>
                        </span>
                        +1 (555) 123-4567
                    </li>
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M21.55 8.17L19 6.47V5.01c0-.55-.45-1-1-1h-2.7l-2.75-1.83c-.34-.22-.77-.22-1.11 0L8.69 4.01h-2.7c-.55 0-1 .45-1 1v1.46l-2.55 1.7c-.28.19-.45.5-.45.83v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-.33-.17-.65-.45-.83ZM7 6h10v4.46l-5 3.33l-5-3.33zM4 20v-9.13l1.45.96l6 4c.17.11.36.17.55.17s.39-.06.55-.17l6-4l1.45-.96V20z" />
                            </svg>
                        </span>
                        hello@nestoria.com
                    </li>
                </ul>

                <div class="social-links">
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Twitter">X</a>
                    <a href="#" aria-label="LinkedIn">IN</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 Nestoria. All rights reserved.</p>
            <p>Made with &hearts; for your dream home.</p>
        </div>

        <div class="footer-branding-wrapper">
            <h6 class="footer-branding">NESTORIA</h6>
        </div>
    </footer>`;
    }
});
