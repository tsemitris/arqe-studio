import { companyLocation } from "../../data/companyLocation";
import { team } from "../../data/team";
import { TeamMemberCard } from "./Member/TeamMemberCard";

export const Team = () => {
  document.title = "Our team - Arqé Studio";
  window.scrollTo(0, 0);

  return (
    <>
      <section className="the-team-section">
        <div className="the-team-container max-section-width">
          <div className="team-intro">
            <h3>Our team</h3>
            <p className="text-medium">
              Our team is a group of passionate designers who bring creativity,
              skill, and attention to detail to every project. With a mix of
              experience and fresh ideas, we work together to create spaces that
              are both beautiful and functional.
            </p>
          </div>

          <div className="team-container">
            {companyLocation.map((location) => {
              const filteredTeam = team.filter(
                (t) => t.country === location.code
              );

              return (
                filteredTeam.length > 0 && (
                  <div key={location.code}>
                    <h3>{location.name}</h3>
                    <div className="team-wrapper">
                      {filteredTeam.map((member) => (
                        <TeamMemberCard
                          key={member.name} // ideally use member.id if available
                          name={member.name}
                          position={member.position}
                          imageUrl={member.image}
                        />
                      ))}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
