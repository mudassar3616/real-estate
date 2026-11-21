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
                <ul class="nav-bar" role="navigation" aria-label="Primary navigation">
                    <li><a href="${link("index.html")}">Home</a></li>
                    <li><a href="${link("listings.html")}">Listings</a></li>
                    <li><a href="${link("services.html")}">Services</a></li>
                    <li><a href="${link("favorites.html")}">Favorites</a></li>
                    <li><a href="${link("blog.html")}">Blog</a></li>
                    <li><a href="${link("about us/about.html")}">About</a></li>
                </ul>
                <div class="header-right-side">
                    <a class="favorite-icon" href="${link("favorites.html")}" aria-label="View favorites">♡</a>
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
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Nestoria</span>
                        </a>
                        <p class="footer-desc">Discover spaces that feel like home. We connect you with premium properties tailored to your lifestyle and budget.</p>
                        <div class="newsletter">
                            <p>Subscribe for new listings</p>
                            <form class="newsletter-form" onsubmit="event.preventDefault();">
                                <label class="sr-only" for="footer-email">Email address</label>
                                <input id="footer-email" type="email" placeholder="Your email address" required>
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
                            <li><a href="${link("favorites.html")}">Saved Favorites</a></li>
                            <li><a href="${link("services.html")}">Help &amp; Services</a></li>
                            <li><a href="mailto:hello@nestoria.com">Contact Nestoria</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <ul class="contact-info">
                            <li>123 Real Estate Blvd,<br>New York, NY 10001</li>
                            <li>+1 (555) 123-4567</li>
                            <li><a href="mailto:hello@nestoria.com">hello@nestoria.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Nestoria. All rights reserved.</p>
                    <p>Made for your dream home.</p>
                </div>
                <div class="footer-branding-wrapper"><h6 class="footer-branding">NESTORIA</h6></div>
            </footer>`;
    }
});
