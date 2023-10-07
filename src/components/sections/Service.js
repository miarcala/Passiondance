"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";

export default function Service(props) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/features");
      const data = await response.json();

      setFeatures(data);
    };

    fetchServices();
  }, []);
  return (
    // Service section start
    <section className="service">
      <div className="container-fluid">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          autoplay={true}
          loop={true}
          modules={[Autoplay]}
        >
          {features.map((feature, index) => {
            return (
              <SwiperSlide key={`feature-${index}`}>
                <div className="single-service">
                  <img src={`assets/images/service/${feature.thumb}`} alt="" />
                  <div className="service-hover">
                    <img src={`assets/images/icons/${feature.icon}`} alt="" />
                    <span>{feature.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
    // Service section end
  );
}
