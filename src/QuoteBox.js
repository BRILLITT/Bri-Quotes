import React from "react"
import { useState } from "react"
import users from "./users.json"
import "./App.css";

import colors from "./colors"

const QuoteBox=()=> {
    const [message,setMessage]=useState(Math.floor(Math.random()*users.length))
    const block=()=>{
     const blue=Math.floor(Math.random()*users.length)
      setMessage(blue)
    }

    return(
      <div className="main" Style={colors[message].color}>
        <div id="cucumber" >
          <p className="paragraph" ><i class="fa-solid fa-quote-left" ></i> {users[message].quote}</p>
          <h1>{users[message].author}</h1>
          <button onClick={block}  ><i class="fa-solid fa-angle-right" Style={colors[message].color}></i></button>
        </div>
      </div>
    )
  
}
   export default QuoteBox;
