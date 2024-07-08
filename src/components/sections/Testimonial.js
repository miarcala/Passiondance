"use client";

import SingleTestimonial from "@/components/SingleTestimonial";
import { useEffect, useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Install modules
SwiperCore.use([Pagination]);

export default function Testimonial(props) {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/testimonials");
      const data = await response.json();

      setTestimonials(data);
    };

    fetchServices();
  }, []);

  return (
    // Testimonial section start
    <section className="testimonial bg-lightred">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {testimonials.map((tsml, index) => {
                return (
                  <SwiperSlide key={`testimonial-${index}`}>
                    <SingleTestimonial
                      key={tsml.userId}
                      id={tsml.userId}
                      name={tsml.userName}
                      designation={tsml.designation}
                      body={tsml.body}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // Testimonial section end
  );
}
