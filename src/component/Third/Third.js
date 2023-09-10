 import React, { useState } from "react";
import "./Third.css";
import Photo1 from "../../Resources/food-photo-1.png";
import Photo2 from "../../Resources/food-photo-2.png";
import Photo3 from "../../Resources/food-photo-3.png";
import Photo4 from "../../Resources/food-photo-4.png";
import Photo5 from "../../Resources/food-photo-5.png";
import Photo6 from "../../Resources/food-photo-6.png";
import ReadMore from "../../Resources/ReadMore.png";
import ArrowL from "../../Resources/Arrow-L.png";
import ArrowR from "../../Resources/Arrow-R.png";

const Third = () => {
  const postsPerPage = 3;
  const totalPosts = 6; // Total number of posts
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6].slice(
    startIndex,
    endIndex
  );

  return (
    <div className="Third">
      <div class="slideshow-container">
        <div className="Dish-heading">
          <span>Latest Article</span>
        </div>

        <div className={`My-slide-${currentPage}`}>
          <div className="Dish-container">
            {currentPosts.map((photo, index) => (
              <div className="Dish" key={index}>
                <img className="IMG" src={photo} />
                <div className="food-name">
                  <h3>Post Title</h3>
                  <p>
                    PLorem Ipsum is simply dummy text for the
                    <br />
                    printing ans typesetting insdustry .Lorem
                    <br />
                    Ipsum has been industry's standard...
                  </p>
                </div>
                <div>
                  <img src={ReadMore} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Arrow">
          <a>
            <img onClick={handlePrevClick} src={ArrowL} />
          </a>
          <a>
            {currentPage}/{totalPages}
          </a>
          <a>
            <img onClick={handleNextClick} src={ArrowR} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Third;
