export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';
export const ADD_QUESTION  = 'ADD_QUESTION';
export const SHOW_ANSWER   = 'SHOW_ANSWER';

let nextQuestionId = 0

export const addQuestion = (qa) => {
  return {
    type: ADD_QUESTION,
    id: nextQuestionId++,
    question: qa.question,
    answer: qa.answer
  }
}

export const toggleAnswer = (id) => {
  return {
    type: TOGGLE_ANSWER,
  }
}


export const next = () => {
  return {
    type: NEXT_QUESTION,
  }
}

export const prev = () => {
  return {
    type: PREV_QUESTION,
  }
}

export const showAnswer = () => {
  return {
    type: SHOW_ANSWER
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
