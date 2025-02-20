import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const socialIcons = [
  {
    id: 1,
    ariaName: "Instagram",
    href: "https://www.instagram.com/marcin.cholewka.priv/",
    icon: faInstagram,
    target: "_blank",
  },
  {
    id: 2,
    ariaName: "Email",
    href: "mailto:photo@marcincholewka.pl",
    icon: faEnvelope,
    target: "_blank",
  },
  {
    id: 3,
    ariaName: "Phone",
    href: "tel:733382725",
    icon: faPhone,
    target: "_blank",
  },
];

export const navbarItems = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "#about-me",
    name: "O mnie",
  },
  {
    id: 3,
    href: "#portfolio",
    name: "Portfolio",
  },
  {
    id: 4,
    href: "#blog",
    name: "Blog",
  },
  {
    id: 5,
    href: "#contact",
    name: "Kontakt",
  },
];
