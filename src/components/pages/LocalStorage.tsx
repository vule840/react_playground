import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { getNameOfDeclaration } from "typescript";
import Tourist from "./Tourist";

//Make tourist objects, render them +
//add them to local storage +
//filter them, and style card
//expand that later, cities to visit ..

const LocalStorage = () => {
  const getTouristsFromStorage = JSON.parse(
    localStorage.getItem("tourists") || "0"
  );
  const [touristData, setTourists] = useState<any[]>(
    getTouristsFromStorage ? getTouristsFromStorage : []
  );
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  //   const obj = '{"name":"John", "age":30, "city":"New York"}';
  //   const ary =
  //     '[{"name":"Mario", "age":23, "city":"ROme"},{"name":"John", "age":30, "city":"New York"},{"name":"Danny", "age":22, "city":"York"}]';
  //   const objTransformed = JSON.parse(ary);
  // console.log(objTransformed);

  React.useEffect(() => {
    const setLocalStorageTourists = JSON.stringify(touristData);
    localStorage.setItem("tourists", setLocalStorageTourists);
  }, [touristData]);

  React.useEffect(() => {
    const getLocalStorageTourists = localStorage.getItem("tourists") || "";
    const parsedTourists = JSON.parse(getLocalStorageTourists);
    if (parsedTourists) {
      setTourists(parsedTourists);
    }
  }, []);

  const deleteTouristHandler = (x: any) => {
    const deletedTourist = touristData.filter((y: any) => y.id !== x.id);
    setTourists(deletedTourist);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
    const [touristName, city, gender] = e.currentTarget.elements;
    // console.log(touristName);
    console.log(touristName.value, city.value);
    setTourists((touristData) => [
      ...touristData,
      {
        id: Math.random(),
        touristName: touristName.value,
        city: city.value,
        gender: gender.value,
      },
    ]);

    localStorage.setItem("tourists", JSON.stringify(touristData) || "0");
  };

  return (
    <div>
      <h2>Local</h2>
      {/* {JSON.stringify(touristData)} */}
      <Tourist deleteTourist={deleteTouristHandler} touristData={touristData} />
      <form className="form" onSubmit={submitHandler}>
        <TextField name="touristName" label="touristName" variant="filled" />
        <TextField name="city" label="City" variant="filled" />
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup name="gender" aria-label="gender" defaultValue="female">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <Button type="submit" variant="outlined">
          Submit tourists
        </Button>
      </form>

      <Button
        onClick={() => {
          localStorage.removeItem("tourists");
          setTourists([]);
        }}
        variant="outlined"
      >
        Clear Tourists
      </Button>
    </div>
  );
};

export default LocalStorage;
