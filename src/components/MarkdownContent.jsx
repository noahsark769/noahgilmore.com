import React from 'react'

export default class MarkdownContent extends React.Component {
  render() {
    return (
      <div className="prose dark:prose-dark max-w-none">
        {this.props.children}
      </div>
    )
  }
}
