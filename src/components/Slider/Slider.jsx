import React, { useState } from "react";
import "./Slider.scss";
import { ReactComponent as Dot } from "../InputComponents/scss/svg/dot.svg";
import { ReactComponent as Next } from "../InputComponents/scss/svg/next.svg";
import { ReactComponent as Prev } from "../InputComponents/scss/svg/prev.svg";

const Slider = (props) => {
  const imagesArray = props.data.metadata.images;
  const stepImages = props.data.metadata.slidesPerView;
  const imagesName = props.data.metadata.title;

  const [step, setStep] = useState(0);

  const nextSlide = () => {
    if (step === imagesArray.length + 1) {
      return setStep(0);
    }
    setStep(step + stepImages);
  };

  const prevSlide = () => {
    if (step === 0) {
      return setStep(imagesArray.length - 1);
    }
    setStep(step - stepImages);
  };

  return (
    <>
      <h1 className="title__images">{imagesName}</h1>
      <div className="row justify-content-between">
        <div className="col custom__block"></div>
        <div className="col custom__block"></div>
        <div className="col custom__block"></div>
      </div>
      <div className="row">
        <div className="col">
          <Prev />
        </div>
        <div className="dot__custom rounded-circle"></div>
        <div className="dot__custom rounded-circle"></div>
        <div className="dot__custom rounded-circle"></div>
        <div className="col custom__arrow">
          <Next />
        </div>
      </div>
    </>
  );
};

export default Slider;
