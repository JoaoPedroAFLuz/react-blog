import PropTypes from 'prop-types';
import React from 'react';

import Container from './styles';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
    };
  }

  render() {
    const { title, description } = this.state;

    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
