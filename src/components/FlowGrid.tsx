import React from 'react'

function group(array: React.ReactNode[], numPerGroup: number) {
  let result = []
  let currentGroup = []

  for (let item of array) {
    currentGroup.push(item)
    if (currentGroup.length === numPerGroup) {
      result.push(currentGroup)
      currentGroup = []
    }
  }

  if (currentGroup.length > 0) {
    result.push(currentGroup)
  }

  return result
}

const Container = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col">{children}</div>
)

const Row = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-row items-center">{children}</div>
)

const Item = ({ children }: React.PropsWithChildren) => <div className="flex-1">{children}</div>

const FlowGrid = ({ children, columns }: React.PropsWithChildren<{ columns: number }>) => {
  let groupedChildren = group(React.Children.toArray(children), columns)
  return (
    <Container>
      {groupedChildren.map(function (group, index) {
        return (
          <Row key={index}>
            {group.map(function (child, index) {
              return <Item key={index}>{child}</Item>
            })}
          </Row>
        )
      })}
    </Container>
  )
}
export default FlowGrid
