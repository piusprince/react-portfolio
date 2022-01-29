import styled from "styled-components";
import { Link } from "react-router-dom";
// import { device } from "../../breakpoints";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #33345a, #051937);
  padding: 2rem 5rem;

  @media (max-width: 700px) {
    background-color: purple;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavLogoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const NavLogoText = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #60ecbd;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const MobileMenuBtn = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: block;
    position: fixed;
    top: 2rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #60ecbd;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.8;
    z-index: 500;
  }

  &:hover {
    color: black;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
