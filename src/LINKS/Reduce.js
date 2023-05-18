import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homepage";
import './reduce.css';
import Contact from "./contact";
import Student from "./STUDENTSSSSSSS";
import store from "./scomponent";
import NewStudent from "./newstudent";
import EditStudent from "./EditStudent";

function Routerof() {
  const [data, setData] = useState([
    {name: "John", Age: 24, Course: "MERN", Batch: "October"},
    {name: "Doe", Age: 24, Course: "MERN", Batch: "Jan"},
    {name: "Biden", Age: 23, Course: "MEAN", Batch: "October"},
    {name: "Barar", Age: 23, Course: "MEAN", Batch: "November"},
    {name: "Christ", Age: 23, Course: "MEAN", Batch: "Jan"},
    {name: "Elent", Age: 22, Course: "MEVN", Batch: "October"},
    {name: "Doe", Age: 22, Course: "MEVN", Batch: "November"},
    {name: "Doe", Age: 22, Course: "MEVN", Batch: "October"},
    {name: "Christ", Age: 22, Course: "MEVN", Batch: "Jan"},
    {name: "Doe", Age: 22, Course: "MEVN", Batch: "October"},
  ])
   return (<> 
<span className="App">
      <header className="App-header">
       <BrowserRouter>
    <Routes>  
      <Route path='/'element={<Home />}/>
      <Route path='/Contact'element={<Contact />}/> 
      <Route path='/Student'element={
     <store.Provider 
    value={{entries: data, entriesFun : setData}}
     >
      <Student />
   </store.Provider>
   
     }/> 
      <Route path="/editstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <EditStudent />
          </store.Provider>
          } />
          <Route path="/newstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <NewStudent />
          </store.Provider>
          } />
     
    </Routes>
            </BrowserRouter>
    
      </header>
    </span>

            </>)
           
}
export default Routerof;   