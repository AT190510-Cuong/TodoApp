import React from "react";
import { useState } from "react";
import classnames from "classnames";
import style from "./app.module.css";
import Form from "./components/Form";
import { deleteJob, updateJob, addJob, getJobs } from "./api/todoApi";
// import
// import logo from './logo.svg';
// import './App.css';

function App() {
  // <h1>React Todo App</h1>
  // const [stateString, setStateString] = useState("");
  // const [stateArray, setStateArray] = useState<string[]>([]);

  // const addToList = () => {
  //   if (stateString !== "") {
  //     setStateArray([...stateArray, stateString]);
  //   }

  //   console.log(stateString);
  //   setStateString("");
  // };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hay-vung-tin-vao-nhung-uoc-mong-ban-da-gui-den-vu-tru.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="container">
        <h1 className="text-center my-2" style={{ color: "#ffffff" }}>
          🦄 MY REACT-TYPESCRIPT TODO APP
        </h1>
        <div className="row">
          {/* <div className="col-md-8 mx-auto my-5"> */}
          <Form />
          {/* </div> */}
        </div>
      </div>

      {/* <h1>🦄 MY TODO APP</h1>
      <input
        type="text"
        placeholder="nhap vao day"
        onChange={(event) => {
          setStateString(event.target.value);
        }}
        value={stateString}
      />
      <button onClick={addToList}>ADD</button>
      {stateArray.map((job, index) => {
        return (
          <div key={index}>
            <li>{job}</li>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
