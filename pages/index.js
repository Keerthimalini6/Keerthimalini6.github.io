import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Skills from "../components/UI/Skills";
import About from "../components/UI/About";
import Project from "../components/UI/Project";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
