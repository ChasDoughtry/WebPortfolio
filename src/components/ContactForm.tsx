import "../styles/Contact.css";

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/chasdoughtry@gmail.com"
      method="POST"
    >
      {/* Email subject */}
      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Contact"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      {/* Prevent FormSubmit from displaying their default template */}
      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <div className="form-row">
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@email.com"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="subject">Subject</label>

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Let's connect"
        />
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="What do you have to say?"
          required
        />
      </div>

      <button type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
