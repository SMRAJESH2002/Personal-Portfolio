import { React, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar cursorPointer">
        <Link to="/" className="navBarLink">
          {" "}
          <i>
            {" "}
            <FaHome />{" "}
          </i>{" "}
          <span> Home </span>{" "}
        </Link>
        <Link to="/about" className="navBarLink">
          {" "}
          <i>
            {" "}
            <FaUser />{" "}
          </i>{" "}
          <span> About </span>{" "}
        </Link>
        <Link to="/portfolio" className="navBarLink">
          {" "}
          <i>
            {" "}
            <FaBriefcase />{" "}
          </i>{" "}
          <span> Portfolio </span>{" "}
        </Link>
        <Link to="/blog" className="navBarLink">
          {" "}
          <i>
            {" "}
            <FaBlog />{" "}
          </i>{" "}
          <span> Blogs </span>{" "}
        </Link>
        <Link to="/contact" className="navBarLink">
          {" "}
          <i>
            {" "}
            <FaAddressBook />{" "}
          </i>{" "}
          <span> Contact </span>{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Header;
