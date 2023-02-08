// atom: 사용할 상태(state)를 담는 곳!

import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", // atom을 구분해줄 고유 값
  default: "", // atom의 기본값
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

// atom: state 일부
