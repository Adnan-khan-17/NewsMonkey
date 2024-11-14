import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const [mode,setMode] = useState("light");


  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor= "#03235a";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= "white";
    }
  }
  
  const [progress,setProgress]= useState(0);
  const pagesize=9;
    
    return (
      <div>
      <BrowserRouter>  
      <LoadingBar color="#f11946" progress={progress}  />
      <Navbar/> 
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode}  key="general" pagesize={pagesize} country="us" category="general"/>}></Route>                
      <Route exact path="/general" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="general" pagesize={pagesize} country="us" category="general"/>}></Route>                
      <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="business" pagesize={pagesize} country="us" category="business"/>}></Route>   
      <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="entertainment" pagesize={pagesize} country="us" category="entertainment"/>}></Route>             
      <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="health" pagesize={pagesize} country="us" category="health"/>}></Route>
      <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode}  key="science" pagesize={pagesize} country="us" category="science"/>}></Route>
      <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode}  key="technology" pagesize={pagesize} country="us" category="technology"/>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="sports" pagesize={pagesize} country="us" category="sports"/>}></Route>
      </Routes>     
      </BrowserRouter>
      </div>
    )
  
}


export default App;
