import React, { useState } from "react";
import people from "./data";

import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const generateRandomIndex = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * people.length);
    } while (randomIndex === index); // Check if the new index is the same as the current index
  
    setIndex(randomIndex);
  };
  

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex < 0 ? people.length - 1 : newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex >= people.length ? 0 : newIndex;
    });
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
          <div>
          <button className="random-btn"  onClick={generateRandomIndex}>
            Surprise Me
          </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Review;
