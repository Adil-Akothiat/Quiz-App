import React from "react";

export default class ScoreQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
    this.handleSaveScore = this.handleSaveScore.bind(this);
  }
  handleSaveScore(e) {
    let score =
      e.target.parentElement.parentElement.firstElementChild.firstElementChild
        .textContent;
    let userScore = {
      userName: e.target.previousElementSibling.value,
      score: score
    };
    let arr = [];
    if (window.localStorage.getItem("score")) {
      arr = [...JSON.parse(window.localStorage.getItem("score"))];
    }
    arr.push(userScore);
    if (userScore.userName) {
      this.setState({ submit: true });
      window.localStorage.setItem("score", JSON.stringify(arr));
      alert("submited!");
    } else {
      alert("please enter your name!");
    }
  }
  render() {
    return (
      <section className="score_quiz hide">
        <div className="score">
          <span id={"score_result"}>{Math.round(this.props.states.score)}</span>
          <br />
          <span>Your Score</span>
        </div>
        <div className="go_home">
          <button
            onClick={(e) => {
              this.setState({ submit: false });
              this.props.states.hideSection(e);
            }}
          >
            GO TO HOME
          </button>
        </div>
        {this.props.states.score === 0 || this.state.submit === true ? null : (
          <div className="save_score">
            <input type={"text"} placeholder={"YOUR NAME"} />
            <button onClick={this.handleSaveScore}>SAVE SCORE</button>
          </div>
        )}
      </section>
    );
  }
}
