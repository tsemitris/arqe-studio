interface ITeamMemberCard {
  name: string;
  position: string;
  imageUrl: string;
}

export const TeamMemberCard = ({
  name,
  position,
  imageUrl,
}: ITeamMemberCard) => {
  return (
    <>
      <div className="team-member-card">
        <div className="team-member-background">
          <div
            className="team-member-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="white-shape"></div>
        </div>
        <h4 className="team-member-name">{name}</h4>
        <p className="team-member-position text-small text-uppercase">
          {position}
        </p>
      </div>
    </>
  );
};
