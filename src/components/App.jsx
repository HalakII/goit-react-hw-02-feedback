import { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions /FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };
  onBtnClicked = option =>
    this.setState(prevState => {
      console.log(option);
      return { [option]: prevState[option] + 1 };
    });

  render() {
    const options = Object.keys(this.state);
    return (
      <div className={css.wrapper}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onBtnClicked}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
