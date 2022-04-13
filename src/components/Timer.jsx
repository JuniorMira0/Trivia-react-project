import React from 'react';
import PropTypes from 'prop-types';

const ONE_SECOND = 1000;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    const { nextFalse, nextClicked } = this.props;
    if (prevState.timer === 1) {
      clearInterval(this.timeID);
      nextFalse();
    }
    if (nextClicked) {
      const { timer } = this.state;
      const { getTimer } = this.props;
      getTimer(timer);
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;
    const { getTimer } = this.props;
    getTimer(timer);
    clearInterval(this.timeID);
  }

  render() {
    const { timer } = this.state;
    return (
      <span>{ timer }</span>
    );
  }
}

Timer.propTypes = {
  nextClicked: PropTypes.bool.isRequired,
  getTimer: PropTypes.func.isRequired,
  nextFalse: PropTypes.func.isRequired,
};

export default Timer;
