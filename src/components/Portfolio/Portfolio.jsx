import './Portfolio.css';
import portfolio1 from '../../image/portfolio1.jpeg';
import portfolio2 from '../../image/portfolio2.jpeg';
import portfolio3 from '../../image/portfolio3.jpeg';
import portfolio4 from '../../image/portfolio4.jpeg';
import portfolio5 from '../../image/portfolio5.jpeg';
import portfolio6 from '../../image/portfolio6.jpeg';

export default function Portfolio() {
    const portfolio = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];
    return (
        <section id="portfolio" class="portfolio">
            <header class="section-header">
                <h2>Portfolio</h2>
                <p>See our <span class="fontOutline">amazing</span><br /><span class="fontOutline">portfolio</span> collection</p>
            </header>
            <div>
                <ul id="portfolio-flters">
                    <li class="filter-active">show all</li>
                    <li>graphic</li>
                    <li>landing</li>
                    <li>art design</li>
                </ul>
            </div>
            <div class="main">
                <div class="cardsP">
                    {portfolio.map((p) => (
                        <div class="cardP">
                            <div class="card__image-container">
                                <img src={p} alt=""></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}