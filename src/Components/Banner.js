import React,{useRef} from "react";
import "./Banner.css";
import TextField from '@mui/material/TextField';

import { AiOutlineSearch } from "react-icons/ai";

function Banner({ query, setquery,prevValue,page,setpage }) {

  function handleChange(event) {
    setpage(1);
    prevValue.current = page;
    setquery(event.target.value);
  }
  return (
    <div className="banner-container">
      <div className="input-wrapper">
        <div className="banner-input">
       
          <h1 className="banner-h"> Unsplash</h1>
          <p className=" banner-span">
            The intrenet source of freely usable images
          </p>
          <p className=" banner-spanP">Powered by creator everywhere</p>
          <div className="banner-search">
            <AiOutlineSearch className="banner-icon" />
            <input
              className="banner-search-input"
              type="search"
              placeholder="Search free high-resolution photos"
              value={query}
              onChange={ handleChange}
            ></input>
      
          </div>
        </div>
      </div>
      <div className="banner-foot">
        <p>Photo by refargotoph</p>
        <p> Read more about the Unplash License</p>
      </div>
    </div>
  );
}

export default Banner;
