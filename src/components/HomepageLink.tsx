import React from 'react'
import { A, Div } from '../components/default'

const StyledLink = ({ children, ...props }: React.ComponentProps<typeof Div>) => (
  <Div
    className="block w-full py-[15px] pr-[15px] bg-white cursor-pointer font-['Bariol','Helvetica_Neue','Helvetica',sans-serif] text-center text-base uppercase mb-[10px] text-right"
    {...props}
  >
    {children}
  </Div>
)

const HomepageLink = ({ to, onClick, children }: React.PropsWithChildren<{
  to?: string
  onClick?: () => void
}>) => {
  if (to) {
    return (
      <StyledLink>
        <A href={to}>{children}</A>
      </StyledLink>
    )
  } else {
    return <StyledLink onClick={onClick}>{children}</StyledLink>
  }
}

export default HomepageLink
