import Link from "next/link";

const aboutSec = (props) => {
  return (
    // About section start
    <section className="about">
      <img src="assets/images/china-rose.png" alt="" className="flower-1" />
      <img src="assets/images/jasmine.png" alt="" className="flower-2" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <div className="sec-heading">
              <img src="assets/images/butterfly.png" alt="" />
              <span className="tagline">About our training center</span>
              <h3 className="sec-title">Explore the potential buried inside you!</h3>
              <p>
              PassionDanse is the perfect place for all dance enthusiasts,
              whether beginners or advanced. Our classes, led by experienced teachers,
              cover various styles such as ballet, jazz, hip-hop, and contemporary dance.
              More than a dance school, PassionDanse creates a space where dancers can meet,
              share experiences, and inspire each other. 
              Join PassionDanse and be part of a vibrant community where the passion for dance is celebrated every day.
              </p>
            </div>
            <Link href="/about" className="btn btn-round">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
    // About section end
  );
};

export default aboutSec;
