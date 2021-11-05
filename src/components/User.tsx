import React, { useContext } from "react";
import StoreContext from "../store/StoreContext";

const User = () => {
  const ctx = useContext(StoreContext);
  const { gender, email, id, picture, name } = ctx;

  return (
    <div>
      {ctx && (
        <>
          <img src={picture?.thumbnail} alt="" />
          <p>{gender}</p>
          <p>{email}</p>
          <p>{id?.name}</p>
        </>
      )}
      {/* <img src={picture.thumbnail} alt="" />
      <h5>{`${name.title} ${name.first} ${name.last}`}</h5>
      <p>{gender}</p>
      <p>{email}</p>
      <p>{id.name}</p>
      <p>{id.value}</p> */}

      {/* {ctx ? JSON.stringify(ctx) : "Loading..."} */}
    </div>
  );
};

export default User;
