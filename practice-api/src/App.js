import "./App.css";
import React, { useState } from "react";
import PopupPostcode from "./PopupPostcode";

function App() {
  const [address, setAddress] = useState("");

  // const [isPopup, setIsPopup] = useState(false);

  // const openPostCode = () => {
  //   setIsPopup(true);
  // };

  // const closePostCode = () => {
  //   setIsPopup(false);
  // };

  return (
    <div className="App">
      <PopupPostcode setAddress={setAddress} />
      {address}
    </div>
  );
}

export default App;
