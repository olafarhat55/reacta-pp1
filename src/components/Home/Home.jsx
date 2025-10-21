import logo from '../../assets/homeImages/logo.svg';

export default function Home() {
  return (
    <section className="home text-center py-5">
      <img
        src={logo}
        alt="Logo"
        className="rounded-circle mb-4"
        width="250"
      />
      <h2 className="text-uppercase fw-bold  text-white">Start Framework</h2>
<div className="divider">
  <span className="line"></span>
  <span className="star"><i className="fa-solid fa-star fs-6"></i></span>
  <span className="line"></span>
</div>


      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}
