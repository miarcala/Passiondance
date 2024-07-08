"use client";

import Link from "next/link";

export default function Banner(props) {
  return (
    // Banner section start
    <section className="banner">
      <div className="spa-img">
        <img src={"/assets/images/spa.png"} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <span>Learning center</span>
              <h2>Where art comes to life.</h2>
              <p>
              Join us at PassionDanse and ignite your passion for dance 
              Enroll in our classes today and be part of our vibrant community!
              </p>
              <Link href="/" className="btn btn-round">
                reserve now
              </Link>
              <a
                className="video-btn"
                data-fancybox
                href="https://www.youtube.com/watch?v=QWUPm0ND7HY"
              >
                <i className="ti-control-play"></i>
                Watch our story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Banner section end
  );
}
