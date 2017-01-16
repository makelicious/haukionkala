import { connect } from 'react-redux'
import { next } from '../actions/index'
import Study from '../components/study'

const getCurrentQA = (questions, current, action) => {
  switch (action) {
    case 'SHOW_ALL':
      return questions
      default:
      return questions[current]
  }
}



const mapStateToProps = (state) => {
  console.log(state.questions[0]);
  return {
    questions: getCurrentQA(state.questions, state.current)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(next())
    }
  }
}

const currentQA = connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)


export default currentQA
