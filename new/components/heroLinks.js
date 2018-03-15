import React from 'react';

export default class HeroLinks extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div className='component-HeroLinks'>
        <ul>
          {props.children}
        </ul>
      </div>
    );
  }
}

module.exports = HeroLinks;