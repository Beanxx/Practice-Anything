// 로그인이 성공했을 때 행동
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESSS";

export const loginSuccess = (id) => ({
  type: LOGIN_SUCCESS,
  payload: id,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
