import './Contact.css'
export default function Contact() {
    return (
        <section class="container" id="contact">
            <div class="info">
                <h3>Adress</h3>
                <p>121 king street, Melbourne Victoria 3000 Australia</p>
                <h3>Phone</h3>
                <p>+61 3 6662 5678</p>
                <h3>Email</h3>
                <p>support@example.com</p>
            </div>
            <div class="form">
                <form id="contact" method="post">
                    <div className="nameEmail">
                        <input name="name" type="text"
                            className="form-control" id="name" placeholder="Name" required />
                        <input name="email" type="text" className="form-control" id="Email" placeholder="Email" required />
                    </div>
                    <div className="subject">
                        <input name="subject" className="form-control" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="message">
                        <textarea name="message" className="form-control" id="message" placeholder="Message" required rows="6" />
                    </div>
                    <div className="btn">
                        <button type="submit" id="form-submit" className="btnBanner ">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}