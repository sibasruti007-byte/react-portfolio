function Contact() {
return (
    <section className="contact">
    <h2>Contact Me</h2>

    <form>
        <input
        type="text"
        placeholder="Enter Name"
        />

        <input
        type="email"
        placeholder="Enter Email"
        />

        <textarea
        placeholder="Message"
        ></textarea>

        <button type="submit">
        Send
        </button>
    </form>
    </section>
);
}

export default Contact;