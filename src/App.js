import React from "react";
import "./App.scss";

//json
import * as data from "./page.json";
//components
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Important from "./components/Important/Important";
import Contact from "./components/Contact/Contact";
import ButtonSubmit from "./components/ButtonSubmit/ButtonSubmit";

const App = () => {
  //data from json
  const GalleryComponent = data.components[0];
  const GridComponent = data.components[1];
  const ContactComponent = data.form;
  const ButtonComponent = data.form;

  return (
    <div className="app">
      <Slider data={GalleryComponent} />
      <About data={GridComponent} />
      <Important data={GridComponent} />
      <Contact data={ContactComponent} />
      <ButtonSubmit data={ButtonComponent} />
    </div>
  );
};

export default App;
