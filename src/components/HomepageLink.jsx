import React from 'react'
import { A, Div } from '../components/default'

const StyledLink = ({ children, ...props }) => (
  <Div
    className="block w-full py-[15px] pr-[15px] bg-white cursor-pointer font-['Bariol','Helvetica_Neue','Helvetica',sans-serif] text-center text-base uppercase mb-[10px] text-right"
    {...props}
  >
    {children}
  </Div>
)

const HomepageLink = (props) => {
  if (props.to) {
    return (
      <StyledLink>
        <A href={props.to}>{props.children}</A>
      </StyledLink>
    )
  } else {
    return <StyledLink onClick={props.onClick}>{props.children}</StyledLink>
  }
}

export default HomepageLink
