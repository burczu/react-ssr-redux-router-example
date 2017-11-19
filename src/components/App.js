import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    initialText: PropTypes.string.isRequired,
    changeText: PropTypes.func.isRequired
  }

  onButtonClick(event) {
    event.preventDefault();

    this.props.changeText();
  }

  render() {
    return (
      <div>
        <p>{this.props.initialText}</p>
        <button onClick={this.onButtonClick.bind(this)}>change text!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: () => dispatch({ type: 'CHANGE_TEXT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
