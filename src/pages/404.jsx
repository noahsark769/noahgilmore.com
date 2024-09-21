import React from 'react'
import styled from 'styled-components'

const OuterContainer = ({ children }) => (
  <div className="m-0 p-0 w-full bg-[#3070a5] h-screen">{children}</div>
)

const Container = ({ children }) => (
  <div className="m-0 p-0 w-[600px] max-w-full mx-auto h-screen text-white font-sans pt-[300px] px-[50px] box-border">
    {children}
  </div>
)

const Title = ({ children }) => (
  <h1 className="text-[100px] pb-10">{children}</h1>
)

const A = ({ children, ...props }) => (
  <a
    className="text-white underline hover:text-white visited:text-white"
    {...props}
  >
    {children}
  </a>
)

const NotFoundPage = () => (
  <OuterContainer>
    <Container>
      <Title>:(</Title>
      <p>
        You found a page that doesn't exist (404).{' '}
        <A href="/blog">Go back home</A>
      </p>
    </Container>
  </OuterContainer>
)

export default NotFoundPage
