import { connect } from 'react-redux'
import QAList from '../components/qaList'

const getAllQAs = (questions, action) => {
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
    questions: getAllQAs(state.questions)
  }
}

const allQAs = connect(
  mapStateToProps
)(QAList)


export default allQAs
