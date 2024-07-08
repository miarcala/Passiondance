import SingleMember from "@/components/SingleMember";

const members = [
  {
    id: 1,
    name: "Sophie Martin",
    specialist: "Classic Danse",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 2,
    name: "Isabella Lopez",
    specialist: "Contemporary Dance",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      googlePlus: "https://google.com",
    },
  },
  {
    id: 3,
    name: "Alexandre Dubois",
    specialist: "Urban Danse",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      googlePlus: "https://google.com",
    },
  },
];
export default function Team(props) {
  const renderMembers = members.map((memb) => {
    return (
      <div className="col-md-4" key={memb.id}>
        <SingleMember
          id={memb.id}
          name={memb.name}
          speciality={memb.specialist}
          social={memb.social}
        />
      </div>
    );
  });

  return (
    // Team section start
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Experienced Team</h3>
              <p>
                PassionDanse is proud to have a team of dedicated and experienced dance instructors 
                who are passionate about sharing their love for dance. Our instructors bring diverse backgrounds and expertise, 
                ensuring that every student receives top-quality guidance and support.
              </p>
            </div>
          </div>
        </div>
        <div className="row">{renderMembers}</div>
      </div>
    </section>
    // Team section end
  );
}
