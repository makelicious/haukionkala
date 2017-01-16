import React, { Component } from 'react';
import './App.css';
// import { combineReducers } from 'redux';
// import { connect } from 'react-redux';
// import { increase, decrease } from './actions/index';

// import QAForm from './components/qa-input';
// import Study from './components/study';
import Header from './components/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      studyMode: true,
      qaList: [{
        question: 'mitähän vittua',
        answer: 'alkaa huumori loppua',
      },
        {
          question: 'kaikki tietää',
          answer: 'iso h:n ja elastisen'
      }],
      qaToUpload: {
        question: '',
        answer: '',
      },
      currentQA: 0,
    };
  }

  handleClick() {
    this.setState({
      studyMode: !this.state.studyMode,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.qaList.push(this.state.qaToUpload);
    let updatedQAList =  this.state.qaList.slice();


    this.setState({
      qaList: updatedQAList,
      qaToUpload: {
        question: '',
        answer: '',
      },
    });
  }

  handleChange(event) {
    this.setState({
      qaToUpload: Object.assign({}, this.state.qaToUpload, {
        [event.target.name]: event.target.value
      })
    });
  }
  incrementQA() {
    this.setState((prevState) => {
      let amountOfQuestions = this.state.qaList.length -1;
      if(prevState.currentQA !== amountOfQuestions) {
        return {currentQA: prevState.currentQA + 1};
      }
      return {currentQA: 0};
      });
  }



  render() {
    // const next = <span onClick={() => this.incrementQA()}>Next</span>;
    // let view = this.state.studyMode ?
    //   <QAForm
    //     question={this.state.qaToUpload.question}
    //     answer={this.state.qaToUpload.answer}
    //   />
    //   :
    //   <div>
    //     <Study
    //       question={this.state.qaList[this.state.currentQA].question}
    //       answer={this.state.qaList[this.state.currentQA].answer}
    //     />
    //     {next}
    //   </div>

    return (
      <div className="App">
        <Header />
        <div className="content" onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
