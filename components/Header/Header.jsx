import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#skills",
    display: "Skills",
  },
  {
    path: "#project",
    display: "Project",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
const linkVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const logoVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <motion.div
            className={`${classes.logo}`}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>
              <span>P</span>ortfolio
            </h1>
          </motion.div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.path}
                  className="nav-link"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 * index }}
                >
                  {item.display}
                </motion.a>
              ))}

              <div className={`${classes.nav__right}`}>
                <Link href="https://drive.google.com/file/d/1luEyKv4UrlDKJZXW4M7Unoq3vTbKfNm_/view?usp=sharing">
                  <a target="_blank" className="d-flex align-items-center gap-2 mb-0">
                    Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header >
  );
};

export default Header;
