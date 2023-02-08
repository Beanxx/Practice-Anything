import React from "react";
import CharacterCounter from "./CharacterCounter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;

// Recoil를 사용하는 컴포넌트 즉 부모 컴포넌트에는 RecoilRoot가 필요!!
// RecoilRoot는 루트 컴포넌트에 넣는 것이 Good!
