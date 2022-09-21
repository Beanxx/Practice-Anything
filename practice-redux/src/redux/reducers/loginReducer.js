import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/loginAction";

const initialState = {
  isLogin: false,
  id: "",
};

const loginReducer = (state = initialState, action) => {
  // action.type, action.paylaod = 받아오는 데이터값
  switch (action.type) {
    case LOGIN_SUCCESS:
      // 항상 객체로 내보내줘야 함
      return {
        isLogin: true,
        id: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        // ...state, // 로그인한 이름이 id로
        isLogin: false,
        id: "",
      };
    // case LOGIN_INFO:
    //    return {
    //     ...state,
    //     userName: action.payload
    //    }
    default:
      return state;
  }
};

export default loginReducer;
