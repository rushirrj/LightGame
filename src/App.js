import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import GreenLightRedLight from "./Components/GreenLightRedLight";
import Registeration from "./Components/Registeration";
function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      {data.length > 0 ? (
        <GreenLightRedLight data={data} setData={setData} />
      ) : (
        <Registeration data={data} setData={setData} />
      )}
    </div>
  );
}

export default App;
