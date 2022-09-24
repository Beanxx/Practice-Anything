import React from "react";
import styled from "styled-components";
// import DaumPostcode from "react-daum-postcode";
import { useDaumPostcodePopup } from "react-daum-postcode";

const PopupPostcode = ({ setAddress }) => {
  const handlePostcode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.info("fullAdress: ", fullAddress);
    console.info("data.zonecode: ", data.zonecode);
    setAddress(fullAddress);
    // onClose();
  };

  const popUp = useDaumPostcodePopup();

  const handleClick = () => {
    popUp({
      onComplete: handlePostcode,
    });
  };

  return (
    <Container>
      <button onClick={handleClick}>주소 검색</button>
      {/* <div>
        <DaumPostcode autoClose onClick={handleClick} />
      </div> */}
    </Container>
  );
};

export default PopupPostcode;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    background-color: aliceblue;
  }
`;
