import React, {useState} from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import LeftFrame from "./Components/LeftFrame"
import ResizableSection from "./Components/CenterFrame"
import RightFrame from "./Components/RightFrame"

const App = () => {
  const [isResizableVisible, setIsResizableVisible] = useState(false);

  const showResizable = () => {
    setIsResizableVisible(true);
  };

  return (
    <div className="app-container">
      <Navbar onShowResizable={showResizable}/>
      <div className="main-container">
        <LeftFrame/>
        <ResizableSection isResizableVisible={isResizableVisible}/>
        <RightFrame/>
      </div>
    </div>
  );
};

export default App;

