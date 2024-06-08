
import './App.css';
// import Page from "./Page/Page";
// import Hage from "./Hage/Hage";
// import Reg from "./Reg/Reg";
// import {useState} from "react";
import Home from "./Home/Home";
import Descr from "./Descr/Descr.jsx";
import Calendar from "./Calendar/Calendar";
import {Route, Routes} from "react-router-dom";
import Links from "./Links/Links";

function App() {
    // const[user, setUser] = useState(localStorage.getItem("user"))
    // console.log(user)
  return (
    <>

        {/*<Reg setUser={setUser}/>*/}
        {/*{Boolean(user)? <Page setUser={setUser}/> : <Reg setUser={setUser}/>}*/}
        <Links/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Descr" element={<Descr/>}></Route>
            <Route path="/Calendar" element={<Calendar/>}></Route>
        </Routes>


    </>
  );
}

export default App;
