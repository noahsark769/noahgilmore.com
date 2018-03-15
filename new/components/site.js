const React = require('react');
const Hero = require('./hero');

export default class Site extends React.Component {
  constructor() {
    super()
    this.state = {section: "home", ...this.state}
  }

  handleSectionClicked(section) {
    this.setState({section: section})
  }

  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div className='component-site'>
        <Hero onSectionClick={ (section) => this.handleSectionClicked(section) } />
      </div>
    );
  }
}

module.exports = Site;
