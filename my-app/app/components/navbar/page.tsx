// components/Navbar.tsx

import React from "react";
import Link from "next/link";
import "./styles.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 >
        <Link href="/components">MyApp</Link>
      </h1>
      <ul >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/components/about">About</Link>
        </li>
        <li>
          <Link href="/components/services">Services</Link>
        </li>
        <li>
          <Link href="/components/contact">Contact</Link>
        </li>
      </ul>
      <h1> <button>  <Link href="/components/cart">Cart</Link></button> </h1>
    </nav>
  );
};

export default Navbar;
