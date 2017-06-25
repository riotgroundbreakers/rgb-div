import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Div extends Component {
  static propTypes = {
    css: PropTypes.string,
    children: PropTypes.any
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
    const { children } = this.props;
    const { Div } = this.state;
    return (
      <Div>{children}</Div>
    );
  }
}

export default Div;