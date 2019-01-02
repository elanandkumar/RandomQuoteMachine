import React from "react";
import PropTypes from "prop-types";
import { getRandomColor } from "../utils/Colors";

const getRandomIndex = (min, max) => {
  const ind = Math.floor(Math.random() * (max - min + 1) + min);
  return ind;
};

const updateBodyColor = color => {
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
};

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor(2)
    };
    updateBodyColor(this.state.color);
    this.getNextQuote = this.getNextQuote.bind(this);
    this.getRandomQuotes = this.getRandomQuotes.bind(this);
  }
  getRandomQuotes() {
    const { quotes } = this.props;
    return quotes[getRandomIndex(quotes.length, 1)];
  }
  getNextQuote() {
    this.setState({ color: getRandomColor(2) }, () => {
      updateBodyColor(this.state.color);
    });
  }

  render() {
    const { quote, author } = this.getRandomQuotes();
    const { color } = this.state;
    return (
      <div id="quote-box" style={{ color: `${color}` }}>
        <div id="text">{quote}</div>
        <div id="author">~ {author}</div>
        <div className="controls">
          <a
            className="button"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote} ~ ${author}`}
            style={{ backgroundColor: `${color}` }}
          >
            <span className="fa fa-twitter" />
          </a>
          <button
            className="button"
            style={{ backgroundColor: `${color}` }}
            id="new-quote"
            onClick={this.getNextQuote}
          >
            Next Quote
            <span
              className="fa fa-step-forward"
              style={{ marginLeft: "5px" }}
            />
          </button>
        </div>
      </div>
    );
  }
}
QuoteMachine.propTypes = {
  quotes: PropTypes.array.isRequired
};
export default QuoteMachine;
