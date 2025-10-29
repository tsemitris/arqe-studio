import { NavLink } from "react-router-dom";

interface IHeaderNavLinksProp {
  navStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderNavLinks = ({ navStatus }: IHeaderNavLinksProp) => {
  return (
    <>
      <NavLink
        className="no-link-line text-uppercase primary-color"
        to="/"
        onClick={navStatus ? () => navStatus((prev) => !prev) : undefined}
      >
        Home
      </NavLink>
      <NavLink
        className="no-link-line text-uppercase primary-color"
        to="/gallery"
        onClick={navStatus ? () => navStatus((prev) => !prev) : undefined}
      >
        Gallery
      </NavLink>
      <NavLink
        className="no-link-line text-uppercase primary-color"
        to="/"
        onClick={navStatus ? () => navStatus((prev) => !prev) : undefined}
      >
        Contact us
      </NavLink>
      <NavLink
        className="no-link-line text-uppercase primary-color"
        to="/"
        onClick={navStatus ? () => navStatus((prev) => !prev) : undefined}
      >
        FAQ
      </NavLink>
    </>
  );
};
