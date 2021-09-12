import './Pricing.css'
export default function Pricing() {
    return (
        <section id="pricing" class="pricing">
            <header class="section-header">
                <h2>Pricing</h2>
                <p>Your plance, your choise</p>
            </header>
            <div class="row">
                <div class="column cPR">
                    <div class="card colorC c1">
                        <h3>Basic</h3>
                        <h2 class="colorPrice">$15</h2>
                        <p class="selectList">Responsive</p>
                        <p class="selectList">Documentation</p>
                        <p>Support</p>
                        <p>Multimedia</p>
                        <p>Creative</p>
                        <p>Modern</p>
                        <p>Free update</p>
                        <button class="btnBanner firstbtn btnPr">Get started</button>
                    </div>
                </div>
                <div class="column">
                    <div class="card activeC">
                        <h3>Standart</h3>
                        <h2>$30</h2>
                        <p class="whiteSelect">Responsive</p>
                        <p class="whiteSelect">Documentation</p>
                        <p class="whiteSelect">Support</p>
                        <p class="whiteSelect">Multimedia</p>
                        <p>Creative</p>
                        <p>Modern</p>
                        <p>Free update</p>
                        <button class="btnBanner firstbtn btnPr">Get started</button>
                    </div>
                </div>
                <div class="column">
                    <div class="card colorC c3">
                        <h3>Premium</h3>
                        <h2 class="colorPrice">$50</h2>
                        <p>Responsive</p>
                        <p>Documentation</p>
                        <p>Support</p>
                        <p>Multimedia</p>
                        <p>Creative</p>
                        <p>Modern</p>
                        <p>Free update</p>
                        <button class="btnBanner firstbtn btnPr">Get started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}