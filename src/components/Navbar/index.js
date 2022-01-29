import React from "react";
import {
  NavWrapper,
  NavLogo,
  NavLogoImg,
  NavLogoText,
  NavMenu,
  NavLink,
  MobileMenuBtn,
  // Sidebar,
  // SidebarLink,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ profile, isOpen, toggleSidebar }) => {
  return (
    <NavWrapper isOpen={isOpen}>
      <NavLogo>
        <NavLogoImg src={profile} alt="profile image" />
        <NavLogoText to="/">Pius Prince</NavLogoText>
      </NavLogo>

      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/services">Services</NavLink>
      </NavMenu>

      <MobileMenuBtn onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuBtn>

      {/* {isOpen && (
        <Sidebar>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About me</SidebarLink>
          <SidebarLink to="/projects">Projects</SidebarLink>
          <SidebarLink to="/services">Services</SidebarLink>
        </Sidebar>
      )} */}
    </NavWrapper>
  );
};

export default Navbar;
