import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import axios from "axios";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const clickHandler = (e) => {
    setIsClicked(!isClicked);
    e.preventDefault();
  };

  const fetchData = () => {
    const result = axios.get("/");
    setData(result.data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>Hello world</h1>
      <div>The To Do List</div>
      <br></br>
      <List clickHandler={clickHandler} />
    </div>
  );
};

export default App;
