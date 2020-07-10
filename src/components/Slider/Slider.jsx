import React, { useState } from "react";

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

      <button onClick={() => nextSlide()}>next</button>
      <button onClick={() => prevSlide()}>prev</button>
    </>
  );
};

export default Slider;
