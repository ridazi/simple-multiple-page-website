// components/About.tsx

import React from "react";
import "./styles.css"; // We'll create this CSS file next.

const About: React.FC = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="content">
          <div className="text">
            <p>
              Hi, I'm [Rida zia], a passionate web developer with a love for
              creating interactive and user-friendly websites. I specialize in
              front-end technologies such as React, Next.js, and custom CSS, tailwend scc and
              I am always eager to learn and explore new tools and frameworks.
            </p>
            <p>
              I believe that great design is about solving problems and making
              things simple and intuitive. When I'm not coding, you can find me
              exploring new design trends, reading tech blogs, or working on my
              personal projects.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
