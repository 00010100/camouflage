import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';
import './SecondScreen.css';

export default class SecondScreen extends Component {
  createState = (obj) => {
    for (let i in obj) {
      obj[i] = {value: ''}
    }
    return obj;
  };

  render() {
    const { questions, nextStep, getAnswers, getResults } = this.props;

    return (
      <div className="screen-wrap">
        <ListItem
          answers={this.createState(questions)}
          nextStep={nextStep}
          callback={getAnswers}
          getResults={getResults}
        />
      </div>
    );
  }
}

SecondScreen.propTypes = {
  // questions: PropTypes.objectOf(PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  // nextStep: PropTypes.func.isRequired,
  // indexes: PropTypes.objectOf(PropTypes.number).isRequired,
};
