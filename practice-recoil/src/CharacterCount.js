import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "./recoil/atom";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

export default CharacterCount;

// useRecoilValue(): 주어진 Recoil 상태 값을 읽을 수 있음
