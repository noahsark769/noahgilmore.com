import React from 'react';
import HeroLinks from './heroLinks';
import Link from './Link.jsx';

export default class Hero extends React.Component {
  static Section = {
    Home: "home",
    Projects: "projects"
  }

  constructor() {
    super()
  }

  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div className='component-hero'>
          <div className="main">
            <h1>noah gilmore</h1>
          </div>
          <HeroLinks>
            <Link type="section" title="about" onClick={ () => props.onSectionClick(Section.About) } />
            <Link type="section" title="projects/work" onClick={ () => props.onSectionClick(Section.Projects) } />
            <Link type="external" title="resume" url="/resume.pdf" />
            <Link type="section" title="contact" onClick={ () => props.onSectionClick(Section.Contact) } />
            <Link type="external" title="blog" url="http://noahgilmore.svbtle.com" />
          </HeroLinks>
      </div>
    );
  }
}

module.exports = Hero;