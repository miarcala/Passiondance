import Posts from "@/components/sections/Posts";

export default function BlogSection(props) {
  return (
    // Blog section start
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Events</h3>
              <p>
                PassionDanse hosts a variety of exciting dance events throughout the year, 
                bringing together dancers of all levels to celebrate their love for dance. 
                From workshops and masterclasses to performances and social gatherings, 
                our events provide opportunities for learning, inspiration, and community building. 
                Join us to experience the joy and energy of our dance events!
              </p>
            </div>
          </div>
        </div>

        {/* Posts */}
        <Posts />
      </div>
    </section>
    // Blog section end
  );
}
