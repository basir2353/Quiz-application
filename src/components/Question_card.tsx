import React, { useState } from "react";
import { questionPropsType } from "../types/type_quiz";
import './Question_card.css'
export const Question_card: React.FC<questionPropsType> = ({
  question,
  option,
  callback
}) => {
  // console.log(question, option);
  let [selctedAns,setSelctedAns]=useState("")
  const handelSelection=(ev:any)=>{
setSelctedAns(ev.target.value)
  }
  return (
    <div className="question-container">
      <div className="questions"><h3>{question}</h3></div>
      <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selctedAns)}
      className="question-form">
        {option.map((opt: string, ind) => {
          return (
            <div key={ind}>
              <label className="radio">
                <input type="radio" name="opt" value={opt} required checked={selctedAns===opt} onChange={handelSelection} />
                {opt}
              </label>
            </div>
          );
        })}
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
};
