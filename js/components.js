function injectNav(activePage) {
    const depth = window.location.pathname.includes('/systems/') || window.location.pathname.includes('/quiz/') ? '../' : '';
    
    const navHTML = `
    <nav>
        <a href="${depth}index.html" class="logo-placeholder">[ LOGO HERE ]</a>
        <div class="nav-links">
            <a href="${depth}index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
            <div class="dropdown">
                <a href="#" class="${activePage === 'systems' ? 'active' : ''}">Body Systems ▾</a>
                <div class="dropdown-menu">
                    <a href="${depth}systems/skeletal.html">Skeletal</a>
                    <a href="${depth}systems/muscular.html">Muscular</a>
                    <a href="${depth}systems/nervous.html">Nervous</a>
                    <a href="${depth}systems/circulatory.html">Circulatory</a>
                    <a href="${depth}systems/respiratory.html">Respiratory</a>
                    <a href="${depth}systems/digestive.html">Digestive</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#" class="${activePage === 'quiz' ? 'active' : ''}">Quiz ▾</a>
                <div class="dropdown-menu">
                    <a href="${depth}quiz/skeletal-quiz.html">Skeletal Quiz</a>
                    <a href="${depth}quiz/muscular-quiz.html">Muscular Quiz</a>
                    <a href="${depth}quiz/nervous-quiz.html">Nervous Quiz</a>
                    <a href="${depth}quiz/circulatory-quiz.html">Circulatory Quiz</a>
                    <a href="${depth}quiz/respiratory-quiz.html">Respiratory Quiz</a>
                    <a href="${depth}quiz/digestive-quiz.html">Digestive Quiz</a>
                </div>
            </div>
            <a href="${depth}about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
            <a href="#sources">Sources</a>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function injectFooter() {
    const depth = window.location.pathname.includes('/systems/') || window.location.pathname.includes('/quiz/') ? '../' : '';
    
    const footerHTML = `
    <footer id="sources">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="footer-logo">[ LOGO HERE ]</div>
                <p style="font-weight: 700; color: white; margin-bottom: 5px;">Human Anatomy Explorer</p>
                <p class="placeholder-text" style="font-size: 12px;">[ PLACEHOLDER: Tagline ]</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="${depth}index.html">Home</a></li>
                    <li><a href="${depth}about.html">About</a></li>
                    <li><a href="#sources">Sources</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Systems</h4>
                <ul>
                    <li><a href="${depth}systems/skeletal.html">Skeletal</a></li>
                    <li><a href="${depth}systems/muscular.html">Muscular</a></li>
                    <li><a href="${depth}systems/nervous.html">Nervous</a></li>
                    <li><a href="${depth}systems/circulatory.html">Circulatory</a></li>
                    <li><a href="${depth}systems/respiratory.html">Respiratory</a></li>
                    <li><a href="${depth}systems/digestive.html">Digestive</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Quiz</h4>
                <ul>
                    <li><a href="${depth}quiz/skeletal-quiz.html">Skeletal Quiz</a></li>
                    <li><a href="${depth}quiz/muscular-quiz.html">Muscular Quiz</a></li>
                    <li><a href="${depth}quiz/nervous-quiz.html">Nervous Quiz</a></li>
                    <li><a href="${depth}quiz/circulatory-quiz.html">Circulatory Quiz</a></li>
                    <li><a href="${depth}quiz/respiratory-quiz.html">Respiratory Quiz</a></li>
                    <li><a href="${depth}quiz/digestive-quiz.html">Digestive Quiz</a></li>
                </ul>
            </div>
        </div>

        <div style="margin-top: 40px;">
            <h4 style="font-size: 12px; color: #C0392B; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">Sources</h4>
            <div class="placeholder-text" style="margin-bottom: 10px;">[ PLACEHOLDER: Source 1 — e.g. Textbook name, Author, Year ]</div>
            <div class="placeholder-text" style="margin-bottom: 10px;">[ PLACEHOLDER: Source 2 — e.g. Website URL ]</div>
            <div class="placeholder-text">[ PLACEHOLDER: Source 3 ]</div>
        </div>

        <div class="footer-bottom">
            <p>Contact Us: <span class="placeholder-text" style="padding: 2px 6px;">[ PLACEHOLDER: email or contact form link ]</span></p>
            <p style="margin-top: 10px;">© 2025 Human Anatomy Explorer — For educational purposes only</p>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
