import React from "react";
import { ReactComponent as QuizIcon } from "../assets/quiz-icon.svg";
import questions from "./questions";

export default class StartQuiz extends React.Component {
  handleViewScore(e) {
    const main = document.querySelector("main");
    main.children[main.children.length - 1].classList.remove("hide");
    e.target.parentElement.parentElement.classList.add("hide");
  }
  render() {
    return (
      <section className="start_quiz">
        <QuizIcon />
        <div className="js_quiz_p">
          <h2>Simple JavaScrip Quiz</h2>
          <p>
            JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action.
          </p>
          <div className="count_time">
            <span>Question Count</span>: <span>{questions.length}</span>
            <br />
            <span>Time</span>: <span>70</span>
          </div>
        </div>
        <div className="view_score">
          <button onClick={this.handleViewScore}>VIEW SCORE</button>
        </div>
        <div className="btn_start">
          <button id="start" onClick={this.props.handleClick}>
            START
          </button>
        </div>
      </section>
    );
  }
}