export const NEXT_QUESTION = 'NEXT_QUESTION';
export const ADD_QUESTION  = 'ADD_QUESTION';
let nextQuestionId = 0;

export const addQuestion = (qa) => {
  return {
    type: ADD_QUESTION,
    id: nextQuestionId++,
    question: qa.question,
    answer: qa.answer
  }
}
export const next = () => {
  return {
    type: NEXT_QUESTION,
  }
}
