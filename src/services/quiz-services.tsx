import { Quiz,QuestionType } from "../types/type_quiz";

const shuffleArray = (arr: any[]): any[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const getQuizDetail = async (totalQuestion: number, level: string): Promise<QuestionType[]> => {
  const res = await fetch(`http://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);
  let { results } = await res.json();
  const quiz:QuestionType[] = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer.toString(),
      correct_answer: questionObj.correct_answer,
      option: shuffleArray(questionObj.incorrect_answers.concat([questionObj.correct_answer.toString()]))
    };
  });
  return quiz;
};
