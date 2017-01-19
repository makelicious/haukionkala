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
    let view = this.state.jeah ?
      <div>
        <p>Answer</p>
        <span>{this.props.cards.answer}</span>
      </div>
      :
      <div>
        <p>Question</p>
        <span>{this.props.cards.question}</span>
      </div>

    return (
      <div onClick={this.handleClick} className='card-container'>
      <p>Card {this.props.cards.id + 1} / {this.props.amountOfCards}</p>
        {view}
        <span className="fontawesome-arrow-right" onClick={() =>{this.props.onClick(this.props.cards, this.props.amountOfCards)}}></span>
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
