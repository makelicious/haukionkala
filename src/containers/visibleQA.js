import { connect } from 'react-redux'
import QAList from '../components/qaList'
import { toggleTodo, toggleAnswer } from '../actions/index'

const getVisibleTodos = (questions, action) => {
  switch (action) {
    case 'SHOW_ALL':
      return questions
      default:
        return questions
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    questions: getVisibleTodos(state.questions)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleAnswer(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAList)


export default VisibleTodoList
