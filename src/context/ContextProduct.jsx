/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Items from "../data/Items.json";
import Slider from "../data/slider.json";
import Marca from "../data/slidermarca.json";
import { createContext, useState } from "react";

export const ContextProduct = createContext();

const ContextProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Items);
  const [slider, setSlider] = useState(Slider);
  const [marca, setMarca] = useState(Marca);

  return (
    <ContextProduct.Provider value={{ products, slider, marca }}>
      {children}
    </ContextProduct.Provider>
  );
};

export default ContextProductProvider;
