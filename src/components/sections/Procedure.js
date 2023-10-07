"use client";

import { useState, useEffect } from "react";
import Post from "@/components/Post";
import Loader from "@/components/Loader";

export default function Procedure(props) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/services");
      const data = await response.json();

      setServices(data);
    };

    fetchServices();
  }, []);

  // URL should be signle service page -> '/services/'+procedure.id
  let procedures = (
    <div className="col-12">
      <Loader />
    </div>
  );
  if (services.length) {
    procedures = services.map((service) => {
      return (
        <Post
          key={service.id}
          id={service.id}
          title={service.title}
          excerpt={service.excerpt}
          body={service.body}
          url={"/"}
        />
      );
    });
  }

  return (
    // Procedures section start
    <section className="procedures">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Popular Procedures</h3>
              <p>
                To doesn't his appear replenish together called he of mad place
                won't wherein blessed second every wherein were meat kind
                wherein and martcin
              </p>
            </div>
          </div>
        </div>
        <div className="row">{procedures}</div>
      </div>
    </section>
    // Procedures section end
  );
}
