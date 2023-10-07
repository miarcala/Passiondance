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
              <span>spa & beauty center</span>
              <h2>Beauty and success starts here.</h2>
              <p>
                Together creeping heaven upon third dominion be upon won't
                darkness rule behold it created good saw after she'd Our set
                living.
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
