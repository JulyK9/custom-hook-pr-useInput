import { useState } from "react";
import Input from "./component/Input";
import "./styles.css";
import useInput from "./util/useInput";

export default function App() {
  //input에 들어가는 상태값 및 로직을 custom hook으로 만들어봅니다.
  //until 폴더의 useInput.js 파일이 만들어져 있습니다.
  // const [firstName, setFirstName] = useState("");
  // const [firstValue, fisrtReset, firstBind] = useInput("");
  const [fisrtReset, firstBind] = useInput("");

  // const [lastName, setLastName] = useState("");
  // const [lastValue, lastReset, lastBind] = useInput("");
  const [lastReset, lastBind] = useInput("");

  const [nameArr, setNameArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setNameArr([...nameArr, `${firstValue} ${lastValue}`]);
    setNameArr([...nameArr, `${firstBind.value} ${lastBind.value}`]);
    fisrtReset("");
    lastReset("");
  };

  return (
    <div className="App">
      <h1>Name List</h1>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <Input
            labelText={"성"}
            value={firstBind}
            // handleInputChange={(e) => {
            //   setLastName(e.target.value);
            // }}
          />
          <Input
            labelText={"이름"}
            value={lastBind}
            // handleInputChange={(e) => {
            //   setLastName(e.target.value);
            // }}
          />
          <button>제출</button>
        </form>
      </div>
      <div className="name-list-wrap">
        <div className="name-list">
          {nameArr.map((el, idx) => {
            return <p key={idx}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
