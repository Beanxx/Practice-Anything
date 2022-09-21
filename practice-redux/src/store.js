// redux는 너무 오래됐다 좀 더 편한 리덕스 툴킷을 써라!
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

export default store;
