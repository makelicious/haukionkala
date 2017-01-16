import React from 'react';

class Study extends React.Component {
  constructor() {
    super();

    this.state = {
      jeah: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      jeah: !this.state.jeah
    })
  }
  render() {
    console.log(this.props);
    let view = this.state.jeah ? <span>{this.props.questions.answer}</span> : <span>{this.props.questions.question}</span>;

    return(
      <div onClick={this.handleClick}>
        {view}
        <span onClick={this.props.onClick}>Next</span>
      </div>
    )
  }
}





// class Study extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         showQuestion: true
//       };
//     }
//
//     toggle(event) {
//       this.setState({
//         showQuestion: !this.state.showQuestion,
//       });
//
//       console.log(this.state.showQuestion);
//     }
//
//   render() {
//     console.log(this.props);
//     const {qaList, counter, dispatch } = this.props;
//     console.log(qaList);
//     // let content = answerVisible ? qaList[counter].answer : qaList[counter].question;
//     let view = <span>jeah</span>;
//     return (
//       <div>
//         <div>
//           {view}
//         </div>
//       </div>
//     );
//   }
// }


// const select = (state) => {
//   // console.log(state);
//   // return {
//   //    qaList: [{
//   //      question: state[0].question,
//   //      answer: state[0].answer,
//   //    },
//   //      {
//   //        question: 'kaikki tietää',
//   //        answer: 'iso h:n ja elastisen'
//   //    }],
//   //    answerVisible: !state.answerVisible
//   //
//   //  }
// }
export default Study
