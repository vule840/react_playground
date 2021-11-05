import React from "react";
import axios from "axios";
import User from "./User";
import RandomData from "./RandomData";

const RandomWrapper = () => {
  const [randomData, setRandomData] = React.useState<any>([]);
  const [twoWay, setTwoWay] = React.useState("");

  const fetchRandom = () => {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response: any) {
        setRandomData([...randomData, ...response.data.results]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const twoWayBind = (e: any) => {
    setTwoWay(e.target.value);
  };
  return (
    <div>
      <h2>starter</h2>
      <User></User>
      <hr />
      <button onClick={fetchRandom}>Fetch random data</button>
      <RandomData randomData={randomData} />
      <input onChange={(e) => twoWayBind(e)} type="text" name="" id="" />
      <p>{twoWay}</p>
    </div>
  );
};

export default RandomWrapper;
