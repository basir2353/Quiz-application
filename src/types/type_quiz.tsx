import React from "react";

export type Quiz = {
  category: String;
  correct_answer: String;
  difficulty: string;
  incorrect_answers: string[];
  question:String
  type: string
};

export type QuestionType={
    question:string
answer: string
option:string[]
correct_answer: String;
};
export type questionPropsType={
question:string,
option:string[],
callback :(e:React.FormEvent<EventTarget> , ans:string)=>void
}