import React from "react";

const RandomData = (props: any) => {
  // console.log(props.randomData);
  const [count, setcount] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    let interval: any = null;
    if (start) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);
  return (
    <div>
      {props.randomData &&
        props.randomData.map((x: any) => {
          return (
            <p>
              <img src={x.picture.thumbnail} alt="" /> {x.gender}
            </p>
          );
        })}
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
      <p>{count}</p>
      <h2>TIme</h2>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <p>{time}</p>
    </div>
  );
};

export default RandomData;
