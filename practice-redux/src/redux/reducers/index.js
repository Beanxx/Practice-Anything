// 여러 리듀서들을 묶어준다.
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  loginReducer,
  dataReducer,
});

export default rootReducer;
