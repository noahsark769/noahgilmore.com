import React from 'react';

export default class Link extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div className='component-Link'>
        <ul>
          Hi
        </ul>
      </div>
    );
  }
}

module.exports = Link;