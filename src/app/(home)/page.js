import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Procedure from "@/components/sections/Procedure";
import Testimonial from "@/components/sections/Testimonial";
import Team from "@/components/sections/Team";
import Appointment from "@/components/sections/Appointment";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Procedure />
      <Testimonial />
      <Team />
      <Appointment />
      <Blog />
      <Contact />
    </>
  );
}
