import React from 'react'

function group(array, numPerGroup) {
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

const Container = ({ children }) => (
  <div className="flex flex-col">{children}</div>
)

const Row = ({ children }) => (
  <div className="flex flex-row items-center">{children}</div>
)

const Item = ({ children }) => <div className="flex-1">{children}</div>

const FlowGrid = (props) => {
  let groupedChildren = group(props.children, props.columns)
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
