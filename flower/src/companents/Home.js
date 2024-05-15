import React from "react";
import "../styles/Home.css";
import çicek from "../assets/flower.jpg";

export const Home = () => {
  return (
    <div className="Homepic" style={{ backgroundImage: `url(${çicek})` }}>
      <div className="açıklama">
        <h1>Everything is for you</h1>
        <h2>Newest flowers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          ducimus?
        </p>
      </div>
      <div>
        <button>For more</button>
      </div>
    </div>
  );
};
