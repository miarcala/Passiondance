import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    // Footer strat
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Link href="index.html" className="logo foo-logo">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
            <nav className="foo-nav">
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">feature</Link>
                </li>
                <li>
                  <Link href="#">service</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="foo-social">
              <Link href="#">
                <i className="ti-facebook"></i>
              </Link>
              <Link href="#">
                <i className="ti-twitter-alt"></i>
              </Link>
              <Link href="#">
                <i className="ti-vimeo-alt"></i>
              </Link>
              <Link href="#">
                <i className="ti-instagram"></i>
              </Link>
            </div>
            <p className="copyright">
              &copy; COPYRIGHT 2024{" "}
              <a href="https://themeies.com">PassionDanse</a> ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
    // Footer end
  );
}
