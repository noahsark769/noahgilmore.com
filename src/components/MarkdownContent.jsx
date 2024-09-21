import React from 'react'
import styled from 'styled-components'
import { colors } from '../components/default'

export default class MarkdownContent extends React.Component {
  render() {
    return (
      <div className="prose dark:prose-dark max-w-none">
        {this.props.children}
      </div>
    )
  }
}
