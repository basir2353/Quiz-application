import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetail } from "./services/quiz-services";
import { QuestionType } from "./types/type_quiz";
import { Question_card } from "./components/Question_card";

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, SetcurrentStep] = useState(0);
  let [score, Setscore] = useState(0);
  let [showResult, SetshowResult] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const question: QuestionType[] = await getQuizDetail(5, "easy");
      setQuiz(question);
      // console.log(question);
    }
    fetchData();
  }, []);

  const handleNextQuestion = (
    e: React.FormEvent<EventTarget>,
    userAns: string
  ) => {
    e.preventDefault();
    console.log(userAns);
    const currentQuesionsnumber: QuestionType = quiz[currentStep];
    console.log(
      "Correct And " +
        currentQuesionsnumber.correct_answer +
        "userSelection is " +
        userAns
    );
    if (userAns === currentQuesionsnumber.correct_answer) {
      Setscore(++score);
    }
    if (currentStep !== quiz.length - 1) SetcurrentStep(currentStep + 1);
    else {
      SetshowResult(true);
    }
  };

  if (!quiz.length) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="reults">
          <h2>Result</h2>
          <p>
            "Your Final Score is <b>{score}</b> out of <b>{quiz.length}</b>"
          </p>
        </div>
      ) : (
        <Question_card
          question={quiz[currentStep].question}
          option={quiz[currentStep].option}
          callback={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;