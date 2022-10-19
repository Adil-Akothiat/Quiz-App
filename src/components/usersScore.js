import React from "react";

export default class UsersScore extends React.Component {
  backHandleClick(e) {
    const main = document.querySelector("main");
    main.children[0].classList.remove("hide");
    e.target.parentElement.parentElement.classList.add("hide");
  }
  getScore() {
    if (window.localStorage.getItem("score")) {
      let scores = JSON.parse(window.localStorage.getItem("score"));

      return scores.map((score, i) => (
        <ul key={"key-" + i}>
          <li className="user_name">{score.userName.toUpperCase()}</li>
          <span>{score.score}</span>
        </ul>
      ));
    } else {
      return null;
    }
  }
  render() {
    return (
      <section className="users_scores hide">
        <h1>Scores</h1>
        <div className="scores">{this.getScore()}</div>
        <div className="back">
          <button onClick={this.backHandleClick}>BACK</button>
        </div>
      </section>
    );
  }
}