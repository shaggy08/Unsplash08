import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

function Header({ query, setquery,prevValue,page,setpage }) {
  function handleChange(event) {
    setpage(1);
    prevValue.current = page;
    setquery(event.target.value);
  }
  return (
    <header className="header-container">
      <nav className="nav-items">
        <img
          className="logo"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
          alt="unsplash-logo"
        ></img>
        <div style={{ width: "4px" }}></div>
        <div className="nav-search">
          <AiOutlineSearch />
          <input
            className="nav-search-input"
            type="search"
            placeholder="Search free high-resolution photos"
            value={query}
            onChange={ handleChange}
          ></input>
        </div>

        <ul className="nav-list">
          <li className="list-item"> Explore</li>
          <li className="list-item"> Advertise</li>
          <li className="list-item"> Blog</li>
        </ul>
        <button className="nav-button" type="button">
          {" "}
          Submit a photo
        </button>
      </nav>
    </header>
  );
}

export default Header;
