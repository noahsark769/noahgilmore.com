const React = require('react');

export default class Site extends React.Component {
  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div>
        Hello to the world
      </div>
    );
  }
}

module.exports = Site;
