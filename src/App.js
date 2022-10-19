import React from "react";
import StartQuiz from "./components/startQuiz";
import QuestionQuiz from "./components/questionQuiz";
import ScoreQuiz from "./components/scoreQuiz";
import questions from "./components/questions";
import UsersScore from "./components/usersScore";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: 0,
      s: 10,
      qsIndex: 0,
      out: false,
      result: false,
      score: 0,
      answer: ""
    };
    this.startHandle = this.startHandle.bind(this);
    this.hideSection = this.hideSection.bind(this);
    this.reset = this.reset.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
  }
  startHandle(e) {
    this.reset();
    this.hideSection(e);
    const line_timer = document.querySelector(".perc");
    let timer = setInterval(() => {
      if (this.state.s > 0) {
        this.setState({ s: this.state.s - 1 });
        line_timer.classList.add("start");
      }
      if (this.state.s === 0 && this.state.m > 0) {
        this.setState({ m: this.state.m - 1, s: 60 });
      }
      if (
        (this.state.s === 0 && this.state.m === 0) ||
        this.state.out === true
      ) {
        clearTimeout(timer);
        line_timer.classList.remove("start");
        this.setState({ result: true });
      }
    }, 1000);
  }
  hideSection(e) {
    let parentElement = e.target.parentElement.parentElement.parentElement;
    if (
      e.target.textContent === "SHOW RESULT" ||
      e.target.textContent === "START" ||
      e.target.textContent === "GO TO HOME"
    ) {
      parentElement = e.target.parentElement.parentElement;
    }
    if (e.target.textContent === "GO TO HOME") {
      this.setState({ out: true });
    }
    if(e.target.textContent === "STOP") this.setState({score: 0})
    parentElement.classList.add("hide");
    if (
      parentElement.nextElementSibling &&
      !parentElement.nextElementSibling.classList.contains("users_scores")
    ) {
      parentElement.nextElementSibling.classList.remove("hide");
    } else {
      document.querySelector("main").children[0].classList.remove("hide");
    }
  }
  reset() {
    this.setState({
      m: 1,
      s: 10,
      qsIndex: 0,
      score: 0,
      out: false,
      result: false,
      answer: ""
    });
  }
  nextSection(e) {
    document
      .querySelectorAll(".ans")
      .forEach((a) => a.firstElementChild.classList.remove("active"));
    if (this.state.qsIndex + 1 < questions.length) {
      this.setState({ qsIndex: this.state.qsIndex + 1 });
    }
    if (this.state.qsIndex + 1 === questions.length) {
      this.hideSection(e);
    }
    let condition = questions[this.state.qsIndex].correct === this.state.answer;
    if (condition) {
      this.setState({ score: this.state.score + 100 / questions.length });
    }
    this.setState({ answer: "" });
  }
  getAnswer(answer) {
    this.setState({ answer: answer });
  }
  render() {
    const states = {
      m: this.state.m,
      s: this.state.s,
      i: this.state.qsIndex,
      hideSection: this.hideSection,
      result: this.state.result,
      score: this.state.score,
      nextSection: this.nextSection
    };
    return (
      <main>
        <StartQuiz states={states} handleClick={this.startHandle} />
        <QuestionQuiz states={states} handleGetAnswer={this.getAnswer} />
        <ScoreQuiz states={states} />
        <UsersScore />
      </main>
    );
  }
}