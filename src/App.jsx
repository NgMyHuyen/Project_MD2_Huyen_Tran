import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import DarkVariantExample from "./Carousel";
// import MainContent from "./MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <DarkVariantExample />
      {/* <MainContent /> */}
      <Footer />
    </div>
  );
}

export default App;
