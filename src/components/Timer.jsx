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
    const { handleClick } = this.props;
    if (prevState.timer === 1) {
      clearInterval(this.timeID);
      handleClick();
    }
  }

  render() {
    const { timer } = this.state;
    return (
      <span>{ timer }</span>
    );
  }
}

Timer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Timer;
