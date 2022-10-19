import React from "react";
import questions from "./questions";

export default class QuestionQuiz extends React.Component {
  render() {
    let m = this.props.states.m,
      s = this.props.states.s,
      qsIndex = this.props.states.i;
    return (
      <section className="quiz_questions hide">
        <div className="timer">
          <div className="time_per_questions">
            <span>
              Question {this.props.states.i + 1}/{questions.length}
            </span>
            <span>
              {m > 9 ? m : "0" + m}:{s > 9 ? s : "0" + s}
            </span>
          </div>
          <div className="line_time">
            <span className="perc"></span>
          </div>
        </div>
        <div className="questions">
          <span>Q {questions[qsIndex].id}:</span>
          <p>{questions[qsIndex].Q}</p>
          <div className="answers">
            {questions[qsIndex].answers.map((answer, index) => {
              return (
                <div
                  key={"key-" + index}
                  className="ans"
                  onClick={(e) => {
                    document
                      .querySelectorAll(".radio")
                      .forEach((e) => e.classList.remove("active"));
                    e.target.firstElementChild.classList.toggle("active");
                    this.props.handleGetAnswer(e.target.textContent);
                  }}
                >
                  <span className="radio"></span>
                  <span className="answer">{answer}</span>
                </div>
              );
            })}
          </div>
          {this.props.states.result === true ? (
            <button id="show_result" onClick={this.props.states.hideSection}>
              SHOW RESULT
            </button>
          ) : (
            <div className="btns">
              <button id="stop" onClick={this.props.states.hideSection}>
                STOP
              </button>
              <button id="next" onClick={this.props.states.nextSection}>
                NEXT
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
}