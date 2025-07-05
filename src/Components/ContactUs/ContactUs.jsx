import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className="contactusmain">
        <Navbar />
        <div className="contactusdetails">
          <div className="contentbox6">
            <div className="contact-container">
              <h2>Contact Us</h2>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
