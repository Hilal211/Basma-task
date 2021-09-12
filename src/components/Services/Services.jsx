import './Services.css'
export default function Services() {
    const about = [{
        "icon": "lni lni-wordpress-filled",
        "title": "WordPress",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-sun",
        "title": "Logo Desgin",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-support",
        "title": "Online Seo",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-crown",
        "title": "Mobile Apps",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-sun",
        "title": "Copywriting",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    {
        "icon": "lni lni-support",
        "title": "FBrand Strategy",
        "content": "Loren lpsum dolor sit amet consecteur adipiscing elit Ea laudantium empore nobis quisquam."
    },
    ]
    return (
        <section id="services" class="about">
            <header class="section-header">
                <h2>services</h2>
                <p>Choose what<br />you like our services</p>
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