import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import useStore from "./store";

function App() {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    loading,
    hasErrors,
    isLogin,
    setIsLogin,
    isName,
    isEmail,
    isPassword,
    setIsName,
    setIsEmail,
    setIsPassword,
    nameMessage,
    emailMessage,
    passwordMessage,
    setNameMessage,
    setEmailMessage,
    setPasswordMessage,
  } = useStore((state) => state);

  const onNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자~5글자로 작성해주세요!");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다!");
      setIsName(true);
    }
  };

  const onEmailChange = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 작성해주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다!");
      setIsEmail(true);
    }
  };

  const onPasswordChange = (e) => {
    const pwRegex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    setPassword(e.target.value);

    if (!pwRegex.test(e.target.value)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다!");
      setIsPassword(true);
    }
  };

  if (loading) {
    return <p>Loading!!</p>;
  }

  if (hasErrors) {
    return <p>cannot read data!!</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:3001/user", {
        name,
        email,
        password,
      })
      .then((res) => console.log(res.data))
      .then(() => alert("signup success"))
      .then(() => setIsLogin(true))
      .catch((err) => console.log(err.response.message));
  };

  console.log(isLogin);

  return (
    <div className="App">
      <input value={name} onChange={onNameChange} />
      {name.length > 0 && (
        <div className={`message ${isName ? "success" : "error"}`}>
          {nameMessage}
        </div>
      )}
      <input value={email} onChange={onEmailChange} />
      <div className={`message ${isEmail ? "success" : "error"}`}>
        {emailMessage}
      </div>
      <input value={password} onChange={onPasswordChange} />
      <div className={`message ${isPassword ? "success" : "error"}`}>
        {passwordMessage}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!(isName && isEmail && isPassword)}
      >
        Click
      </button>
      <div>{name}</div>
    </div>
  );

  // axios & async, await로 post 요청
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3001/user", {
  //       name: name,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // fetch로 post 요청
  // const handleSubmit = (name) => {
  //   fetch("http://localhost:3001/user", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(name),
  //   }).then((res) => {
  //     if (res.status === 201) {
  //       console.log("success");
  //     }
  //   });
  // };
}

export default App;
