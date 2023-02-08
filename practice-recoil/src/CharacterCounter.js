import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "./recoil/atom";
import CharacterCount from "./CharacterCount";

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  // useReocilState(): 컴포넌트가 atom을 읽고 쓰게 하기 위함

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export default CharacterCounter;

// Selector: 파생된 상태(derived state)의 일부
// 파생된 상태란? 상태의 변화
