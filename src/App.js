import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "./redux/actions/loginAction";
import { dataSuccess } from "./redux/actions/dataAction";

const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [content, setContent] = useState("");

  // 함수 안에 useSelector에선 동작 안함!

  // const isLogin = useSelector((state) => state.loginReducer.isLogin);
  // const onClick = () => {
  //   console.log(isLogin);
  // };

  // console.log(useSelector((state) => state.loginReducer.isLogin));

  // 리덕스 스토더에 담긴 상태를 가져온다.
  const isLogin = useSelector((state) => state.loginReducer);
  const login = useSelector((state) => state.loginReducer.isLogin);
  const isData = useSelector((state) => state.dataReducer);
  const data = useSelector((state) => state.dataReducer.content);

  useEffect(() => {
    if (localStorage.getItem("token" !== null)) {
      dispatch(loginSuccess(id));
    }
  }, []);

  const loginClick = () => {
    // reducer랑 엮어서 사용한다.
    dispatch(loginSuccess(id));
    localStorage.setItem("token", "abc");
  };

  const logoutClick = () => {
    dispatch(logoutSuccess());
    localStorage.removeItem("token");
    setId("");
    setContent("");
  };

  const dataClick = () => {
    dispatch(dataSuccess(content));
  };

  console.log(id);
  console.log(content);
  console.log(isLogin);
  console.log(isData);

  return (
    <div>
      <div>
        <label>아이디</label>
        <input onChange={(el) => setId(el.target.value)}></input>
        {login && (
          <>
            <label>내용</label>
            <input onChange={(el) => setContent(el.target.value)}></input>
          </>
        )}
      </div>
      <div>
        <button onClick={loginClick}>로그인</button>
        <button onClick={logoutClick}>로그아웃</button>
        {login && <button onClick={dataClick}>게시물 작성</button>}
      </div>
      {data}
    </div>
  );
};

export default App;
