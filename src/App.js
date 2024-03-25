import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather Dark Mode is enabled or not
  const [greenMode, setgreenMode] = useState("light"); //wheather Green Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const toggleGreenMode = () => {
    if (greenMode === "light") {
      setgreenMode("dark");
      document.body.style.backgroundColor = "#014422";
      showAlert("Green mode has been enabled", "success");
    } else {
      setgreenMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutils"
        mode={mode}
        greenMode={greenMode}
        toggleGreenMode={toggleGreenMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <div className="container">
        <About mode={mode} />
      </div> */}
      <div className="container my-3">
        {" "}
        <TextForm
          heading="Textutils - Word Counter, Character Counter, Remove extra spaces"
          mode={mode}
          greenMode={greenMode}
          showAlert={showAlert}
        />
      </div>
      {/* <div className="container my-3">
          <Routes>
            {/* /users.-->.component 1
            /users/home.-->.-->.component 2 */}
      {/* <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  greenMode={greenMode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div> */}
      {/* <div className="container">
          <About />
        </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
