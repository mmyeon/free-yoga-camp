import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import db from "../../db";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import BodyPart from "../../components/BodyPart";

export default function Main() {
  return (
    <div className="App">
      <div className="title_display">
        <h1 className="title free">Free</h1>
        <h1 className="title yogacamp">Yoga Camp</h1>
      </div>
      <div className="body-align">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="carousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {db.map(item => (
            <Link to="Detail">
              <BodyPart
                key={item.id}
                title={item.title}
                backgroundColor={item.backgroundColor}
              />
            </Link>
          ))}
        </Carousel>

        {/* <BodyPart title={"Neck"} />
        <BodyPart title={"Shoulder"} />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart />
        <BodyPart /> */}
      </div>
    </div>
  );
}
