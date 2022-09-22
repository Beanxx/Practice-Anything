import "./App.css";
import React, { useState } from "react";
import PopupPostcode from "./PopupPostcode";

function App() {
  const [address, setAddress] = useState("");

  const [isPopup, setIsPopup] = useState(false);

  const openPostCode = () => {
    setIsPopup(true);
  };

  const closePostCode = () => {
    setIsPopup(false);
  };

  return (
    <div className="App">
      <button onClick={openPostCode}>주소 검색</button>
      {isPopup ? (
        <PopupPostcode onClose={closePostCode} setAddress={setAddress} />
      ) : (
        <div> {address}</div>
      )}
    </div>
  );
}

export default App;
