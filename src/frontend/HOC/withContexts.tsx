import React from 'react'

function withContexts(Component) {
  return props => <Component {...props} />
}

export default withContexts
