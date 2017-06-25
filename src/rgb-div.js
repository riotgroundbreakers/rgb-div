import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Div extends Component {
  static propTypes = {
    css: PropTypes.string,
  };

  static defaultProps = {
    css: `height: 10px; background-color: black;`
  };

  state = {
    Div: 'div'
  };
  
  constructor(props) {
    super(props);

    this.state = {
      Div: styled.div`${props.css}`
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.css !== this.props.css) {
      this.setState({
        Div: styled.div`${nextProps.css}`
      });
    }
  }

  render() {
    const { text } = this.props;
    const { Div } = this.state;
    return (
      <Div>{text}</Div>
    );
  }
}

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;