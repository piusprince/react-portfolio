import bookstore from "../../images/bookstore.webp";
import Pizza from "../../images/Pizza.webp";
import pThought from "../../images/pThought.webp";

export const projects = [
  {
    id: 1,
    name: "Master's Pizza",
    desc: "A fictional pizza restaurant website with responsive user interface. This website was built with React and Styled Components. New features are being added such as building a login system, adding a cart feature, payment system, and more.",
    img: Pizza,
    github: "https://github.com/piusprince/react-pizza-website",
    live: "https://personal-react-pizza-website.netlify.app/",
  },
  {
    id: 2,
    name: "Folon Bookstore",
    desc: "Folon is a bookstore website that would allow its users to browse through a catalog of books, and make purchases. This web application is yet to be built hopefully before the year ends. It would be built with React using typescript, styled-components or tailwindcss, a state management library(redux or recoil), and more.",
    img: bookstore,
    github: "",
    live: "https://folon-bookstore.netlify.app/",
  },
  {
    id: 1,
    name: "pThoughts",
    desc: "Ever needed a space where you are surrounded with daily positive thoughts? Well, this is the place for you. This is a personal project that I am currently building. It is a web application that would allow users get daily positive messages from renowned personalities.",
    img: pThought,
    github: "",
    live: "https://pthoughts.netlify.app/",
  },
];
