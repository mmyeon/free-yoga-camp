import React, { Component } from "react";
import "./App.css";
import BodyPart from "./components/BodyPart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  { title: "Neck & Shoulder", backgroundColor: "#94ccfe", backgroundImage: "" },
  { title: "Lower Back", backgroundColor: "#94ACFE", backgroundImage: "" },
  { title: "Core", backgroundColor: "#BB94FE", backgroundImage: "" },
  { title: "Hip Flexor", backgroundColor: "#5C9EF6", backgroundImage: "" },
  { title: "Hamstrings", backgroundColor: "#D4CEED", backgroundImage: "" },
  { title: "Hands & Wrists", backgroundColor: "#94ccfe", backgroundImage: "" }
];

function App() {
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
          {data.map((item, index) => (
            <BodyPart
              key={index}
              title={item.title}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </Carousel>
        ;
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

export default App;
