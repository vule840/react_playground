import React, { useEffect, useRef, useState } from "react";

const EffectComponent = () => {
  const [state, setstate] = useState(0);
  const ref = useRef(0);

  ref.current = state;
  // useEffect(() => {
  //   // console.log("Effect one");

  //   console.log(ref);
  //   setTimeout(() => console.log("settimeout after 1 sec"), 1000);
  //   // setInterval(() => console.log("after 2 secs"), 2000);
  // });
  const handleClick = () => {
    setTimeout(() => alert("clicked " + ref.current + " times"), 1000);
  };
  console.log("state renderd");
  return (
    <div>
      <h2>Use effect comp</h2>
      <button onClick={() => setstate((state) => state + 1)}>
        Change state
      </button>
      <button onClick={handleClick}> Show alert</button>
      {state}
    </div>
  );
};

export default EffectComponent;
