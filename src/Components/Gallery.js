import React, { useState, useEffect,useRef } from "react";
import "./Gallery.css";
import request from "../Request";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";

function Gallery({ query, setquery,prevValue,page,setpage }) {
  const [postsrow1, setpostsrow1] = useState([]);
  const [postsrow2, setpostsrow2] = useState([]);
  const [postsrow3, setpostsrow3] = useState([]);
  const [loading, setloading] = useState(true);
  const AccessKey = process.env.REACT_APP_ACCESSKEY;

let first= false;
  const fetchpost = async () => {
    setloading(true);
    if(query.length>1){
      first=true;
      const params = { params: { client_id: AccessKey, query: query,page:page,per_page:30 } };
      const result1 = await request.get(`/search/photos`, params);

     if(page==1){
      setpostsrow1([]);
      setpostsrow1( [...result1.data.results.slice(0, 10)]);
      setpostsrow2( [...result1.data.results.slice(10, 20)]);
      setpostsrow3( [...result1.data.results.slice(20, 30)]);
     }
     else{
      setpostsrow1( [...postsrow1,...result1.data.results.slice(0, 10)]);
      setpostsrow2( [...postsrow2,...result1.data.results.slice(10, 20)]);
      setpostsrow3( [...postsrow3,...result1.data.results.slice(20, 30)]);
     }
     prevValue.current=page+1
     setpage(prevValue.current)
    }
    else 
    {
      if(first){
        first=false;
        setpostsrow1([])
        setpostsrow2([])
        setpostsrow3([])
      }
    const params = { params: { client_id: AccessKey, count: 30 } };
    const result1 = await request.get(`photos/random/`, params);
    setpostsrow1([...postsrow1, ...result1.data.slice(0, 10)]);
    setpostsrow2([...postsrow2, ...result1.data.slice(11, 20)]);
    setpostsrow3([...postsrow3, ...result1.data.slice(20, 29)]);
     }

    setloading(false);
  }; 

  useEffect(() => {
    fetchpost();
  }, [query]);

  // useEffect( ()=>{
  //   const event =window.addEventListener("scroll",()=>{
  //     if((!loading && window.innerHeight + window.screenY)>= document.body.scrollHeight-2){
  //       setpage( (oldpage)=>{
  //         return oldpage+1
  //       });
  //     }
  //   });
  // return ()=> window.removeEventListener("scroll",event);
  // },[])

  return (
    // <InfiniteScroll
    //   className="gallery-conatiner"
    //   dataLength={posts.length}
    //   next={fetchpost}
    //   hasMore={true}
    //   loader={<h1>loading</h1>}
    // >

    //     {posts.map((photo) => (
    //       <img
    //         src={photo.urls.small}
    //         alt={photo.alt_description}
    //         key={photo.id}
    //       />
    //     ))}

    // </InfiniteScroll>

    <div className="gallery-conatiner">
      <InfiniteScroll
        dataLength={postsrow1.length}
        next={fetchpost}
        hasMore={true}
        loader={<Skeleton />}
      >
        <div className="col-1">
          {postsrow1.map((photo) => (
            <img
              className="gallert-img"
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          ))}
        </div>
      </InfiniteScroll>

      <div className="col-1">
        {loading ? (
          <Skeleton />
        ) : (
          postsrow2.map((photo) => (
            <img
              className="gallert-img"
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          ))
        )}
      </div>
      <div className="col-1">
        {loading ? (
          <Skeleton />
        ) : (
          postsrow3.map((photo) => (
            <img
              className="gallert-img"
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
