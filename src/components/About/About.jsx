import './About.css'
export default function About() {
    const about = [{
        "icon": "lni lni-crown",
        "title": "Create idea",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-sun",
        "title": "Smart solution",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-support",
        "title": "Free support",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    ]
    return (
        <section id="about" class="about">
            <header class="section-header">
                <h2>About us</h2>
                <p>Our goal is to<br />make your life easier</p>
            </header>
            <div class="row">
                {about.map((a) => (
                    <div class="column">
                        <div class="card">
                            <i class={a.icon}></i>
                            <h3>{a.title}</h3>
                            <p class="desc">{a.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}