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
          {/* <img className="banner-img" src="https://gray-ksfy-prod.cdn.arcpublishing.com/resizer/u84ccWStpHzoc4mlSIEgoubbcA8=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ISXKASNGXVDWTCSJFHAYJ2F7LQ.png" alt="banner-image"></img> */}
          {/* <img
            className="banner-img"
            src="https://wallpaperaccess.com/full/370459.jpg"
            alt="banner-image"
          ></img> */}

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
            {/* <TextField
            // sx={{
            //   width: "50%",
            //   backgroundColor: "white",
            //   borderRadius: "4px",
            // }}
            label="Search high quailty image"
            value={query}
            onChange={handleChange}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <SearchIcon />
            //     </InputAdornment>
            //   ),
            // }}
            variant="standard"
           
          /> */}
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
