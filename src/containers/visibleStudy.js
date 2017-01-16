import { connect } from 'react-redux'
import { prev, next } from '../actions/index'
import Study from '../components/study'

const getVisibleQA = (questions, current, action) => {
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
    questions: getVisibleQA(state.questions, state.current)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(prev)
    }
  }
}

const VisibleQA = connect(
  mapStateToProps
)(Study)


export default VisibleQA
