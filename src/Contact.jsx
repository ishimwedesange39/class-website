function Contact({ schoolName, goHome }) {
  return (
    <section>
      <h2>Contact Us</h2>

      <p>School: {schoolName}</p>
      <p>Location: Rwanda</p>

      <p>
        Email:{' '}
        <a href="mailto:kivumu@gmail.com">
          kivumu@gmail.com
        </a>
      </p>

      <button onClick={() => goHome('Home')}>
        Return to Home
      </button>
    </section>
  );
}

export default Contact;