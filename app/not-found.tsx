import React from "react"

const OuterContainer = ({ children }: React.PropsWithChildren) => (
  <div className="m-0 p-0 w-full bg-[#3070a5] h-screen">{children}</div>
)

const Container = ({ children }: React.PropsWithChildren) => (
  <div className="m-0 p-0 w-[600px] max-w-full mx-auto h-screen text-white font-sans pt-[300px] px-[50px] box-border">
    {children}
  </div>
)

const Title = ({ children }: React.PropsWithChildren) => (
  <h1 className="text-[100px] pb-10">{children}</h1>
)

const A = ({ children, ...props }: React.ComponentProps<'a'>) => (
  <a
    className="text-white underline hover:text-white visited:text-white"
    {...props}
  >
    {children}
  </a>
)

export default function NotFound() {
  return (
    <OuterContainer>
      <Container>
        <Title>:(</Title>
        <p>
          You found a page that doesn&apos;t exist (404).{" "}
          <A href="/blog">Go back home</A>
        </p>
      </Container>
    </OuterContainer>
  )
}
