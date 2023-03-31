import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import profile5 from "../../public/images/profile5.png";
import classes from "../../styles/hero.module.css";
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState('Full Stack Web Developer');


  const headingVariants = {
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

  const firstSubtitleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const lastSubtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>

              <motion.h5
                className={`${classes.section__subtitle}`}
                variants={firstSubtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Hello
              </motion.h5>
              <motion.h2 className="mt-3 mb-3" variants={headingVariants} initial="hidden" animate="visible">
                I&apos;m Keerthi malini
              </motion.h2>
              <motion.h5
                className={`${classes.h5_text}`}
                variants={lastSubtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Full Stack Web Developer
              </motion.h5>

              <p className={`${classes.p_text}`}>
                A Diligent MERN Stack Developer, Developing websites using a variety of tools and
                technologies, including HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Eager to
                embrace opportunities that offer challenge and to build innovative, efficient, and user-
                friendly web applications that meet the needs of modern businesses.
              </p>
              <div className={`${classes.nav__right} mt-5`} style={{ display: "flex", gap: '15px' }}>
                <motion.a className={classes.nav__anc} href="https://github.com/Keerthimalini6" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a className={classes.nav__anc} href="https://www.linkedin.com/in/keerthi-malini-698923161/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <AiOutlineLinkedin className={classes.nav__icon} />
                </motion.a>
                <motion.a className={classes.nav__anc} href="mailto:keerthimalini6699@gmail.com" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <AiOutlineMail className={classes.nav__icon} />
                </motion.a>
                <motion.a className={classes.nav__anc} href="tel:+919688730555" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <BiPhoneCall className={classes.nav__icon} />
                </motion.a>
              </div>

            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={profile5} width="230" height="300" />

            </div>
            {/* <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div> */}
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default Hero;
