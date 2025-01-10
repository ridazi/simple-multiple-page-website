import React from 'react'

import Link from 'next/link';


// components/Hero.tsx


// We'll create this CSS file next.

const Home: React.FC = () => {
  return (
  <div>  <section className="hero">
  <div className="heroContent">
    <h1 className="heroTitle">Welcome to My Portfolio!</h1>
    <p className="heroDescription">
      Hi, I'm [Your Name], a passionate web developer dedicated to crafting beautiful, functional websites and applications.
    </p>
    <button className='button'>
    <Link href=". /components/about" className="heroButton">
      Learn More 
    </Link>
    </button>
    
  </div>

</section></div>
  );
};

export default Home;
