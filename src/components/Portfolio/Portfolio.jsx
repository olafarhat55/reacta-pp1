import { useState } from "react";
import port1 from "../../assets/portfolioImages/port1.png";
import port2 from "../../assets/portfolioImages/port2.png";
import port3 from "../../assets/portfolioImages/port3.png";

const projects = [
  { id: 1, title: "Project One", img: port1 },
  { id: 2, title: "Project Two", img: port2 },
  { id: 3, title: "Project Three", img: port3 },
  { id: 4, title: "Project Four", img: port1 },
  { id: 5, title: "Project Five", img: port2 },
  { id: 6, title: "Project Six", img: port3 },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section portfolio bg-white">
      <div className="container d-flex flex-column justify-content-center align-content-center">
        <h2 className="text-center fs-1 fw-bold">Portfolio</h2>
        <div className="divider mb-4">
          <span className="line"></span>
          <span className="star"><i className="fa-solid fa-star"></i></span>
          <span className="line"></span>
        </div>

        
        <div className="grid projects">
          {projects.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => setSelectedImage(p.img)}
            >
              <img src={p.img} alt={p.title} />
              <div className="overlay">
                <i className="fa-solid fa-plus"></i>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ==== LIGHTBOX ==== */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged project" />
        </div>
      )}
    </section>
  );
}
