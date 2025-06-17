
import { NavbarContainer, NavItem, NavList, Logo } from "./NavbarShared.style";
import { Link, useLocation } from "react-router-dom";

function NavbarShared() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <Logo>S8-ITAcademy</Logo>
      <NavList>
        <NavItem isActive={location.pathname === "/"}>
          <Link to="/">Inicio</Link>
        </NavItem>
        <NavItem isActive={location.pathname === "/map"}>
          <Link to="/map">Mapa</Link>
        </NavItem>
        <NavItem isActive={location.pathname === "/grafic"}>
          <Link to="/grafic">Gráficos</Link>
        </NavItem>
        <NavItem isActive={location.pathname === "/calendar"}>
          <Link to="/calendar">Calendario</Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default NavbarShared;
