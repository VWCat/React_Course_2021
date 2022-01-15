import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./containers/MainPage";
// import RegistrationPage from "./containers/RegistrationPage";

const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  return <MainPage />;
};

export default App;
