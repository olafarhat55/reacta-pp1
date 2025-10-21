export default function Footer() {
  return (
    <>
      {/* ====== FOOTER CONTENT ====== */}
      <footer className="footer text-center text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">LOCATION</h4>
              <p>
                2215 John Daniel Drive<br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center gap-3 fs- mt-3">
                <a href="#" className="icon-circle text-white"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className=" icon-circle text-white"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="icon-circle text-white"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="icon-circle text-white"><i className="fa-solid fa-globe"></i></a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ====== COPYRIGHT BAR ====== */}
      <div className="copyright text-white text-center py-4 small">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
