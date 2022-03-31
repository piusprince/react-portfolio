import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/about">About me</SidebarLink>
      <SidebarLink to="/projects">Projects</SidebarLink>
      <SidebarLink to="/services">Services</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #33345a, #051937);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  animation: ${({ toggle }) =>
    toggle
      ? "sidebar-open 0.5s ease-in-out"
      : "sidebar-close 0.5s ease-in-out"};
  @keyframes sidebar-open {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes sidebar-close {
    0% {
      transform: translateX(0);

      transform: translateX(-100%);
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarLink = styled(Link)`
  font-size: 2.4em;
  color: white;
  text-decoration: none;
  padding: 0 2rem;
  margin: 2rem;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #60ecbd;
  }
`;
