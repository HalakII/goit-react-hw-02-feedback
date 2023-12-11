import { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions /FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './SectionTitle/SectionTitle';
import { Notification } from './NotificationMessage/NotificationMessage';

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
      return { [option]: prevState[option] + 1 };
    });

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onBtnClicked}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
