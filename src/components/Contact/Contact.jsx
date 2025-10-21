export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="contact-title text-uppercase fw-bold mb-3">Contact Section</h2>

        <div className="divider mb-4">
          <span className="line"></span>
          <span className="star"><i className="fa-solid fa-star"></i></span>
          <span className="line"></span>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="userName" required />
          <input type="text" placeholder="userAge" required />
          <input type="email" placeholder="userEmail" required />
          <input type="password" placeholder="userPassword" required />
          
          <button className="btn-submit" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
