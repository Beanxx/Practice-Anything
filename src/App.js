import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import useStore from "./store";

function App() {
  // const [name, setName] = useState("");
  const name = useStore((state) => state.name);
  const email = useStore((state) => state.email);
  const setName = useStore((state) => state.setName);
  const setEmail = useStore((state) => state.setEmail);

  const isLogin = useStore((state) => state.isLogin);
  const setIsLogin = useStore((state) => state.setIsLogin);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:3001/user", {
        name: name,
      })
      .then((res) => console.log(res.data))
      .then(() => alert("signup success"))
      .then(() => setIsLogin(true))
      .catch((err) => console.log(err.response.message));
  };

  console.log(isLogin);

  return (
    <div className="App">
      <input value={name} onChange={onChange} />
      {/* <input value={email} onChange={onChange} /> */}
      {/* <input value={password} onChange={onChange} /> */}

      <button onClick={handleSubmit}>Click</button>
      <b>{name}</b>
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
