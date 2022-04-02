import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const Sidebar = () => {
  return (
    <AnimatePresence>
      <SidebarContainer
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        exit={{
          width: 0,
          transition: { delay: 0.7, duration: 0.3 },
        }}
      >
        <SidebarLink
          initial="closed"
          animate="open"
          variants={linksVariant}
          to="/"
        >
          Home
        </SidebarLink>
        <SidebarLink
          initial="closed"
          animate="open"
          variants={linksVariant}
          to="/about"
        >
          About me
        </SidebarLink>
        <SidebarLink
          initial="closed"
          animate="open"
          variants={linksVariant}
          to="/projects"
        >
          Projects
        </SidebarLink>
      </SidebarContainer>
    </AnimatePresence>
  );
};

export default Sidebar;

const linksVariant = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #33345a, #051937);
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarLink = styled(motion(Link))`
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
