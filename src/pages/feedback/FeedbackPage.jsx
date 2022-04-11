import React from 'react';
import Feedback from '../../components/Feedback';
import Header from '../../components/Header';

class FeedbackPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Feedback { ...this.props } />
      </div>
    );
  }
}

export default FeedbackPage;
