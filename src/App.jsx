import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Main from "./Component/Main";
import './App.css'
import { useState } from "react";
import {titles} from './Data';
import { contents} from "./Data"; 
import Ad_section from "./Component/Ad_section";





function App(){
    
    let[title,setTitle]=useState("Home");
    let[content,setContent]=useState(<h2>React is a JavaScript library for building user interfaces.</h2>);

    let handleClick =(idx)=>{
        setTitle(titles[idx]);
        setContent(contents[idx]);
    }
   
    return(
        <div>
            <Navbar></Navbar>
            
            <div className="Sidebar-Main-container">
            <Sidebar handleClick={handleClick} ></Sidebar>
            <Main title={title} content={content}></Main>
            <Ad_section/>
            </div> 
        </div>
    );
}
export default  App;