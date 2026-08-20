import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";
import "../styles/Contact.css"

function Contact() {
  return (
    <>
      <Navbar />

      <h1 className="heading-title" style={{ paddingTop:"150px" }}> Contact </h1>

      <div className="contact-container">
        <ContactCard />
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
