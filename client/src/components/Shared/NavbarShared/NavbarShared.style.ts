import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #0f1c2e;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${(props) => (props.isActive ? "#ffffff" : "#aab4c5")};
    font-weight: ${(props) => (props.isActive ? "600" : "400")};
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #1a2a40;
      color: #ffffff;
    }
  }
`;
