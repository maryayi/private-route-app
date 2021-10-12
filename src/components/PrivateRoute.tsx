import React, { ComponentType } from 'react'
import { Route } from 'react-router-dom'

interface Props {
  path: string,
  component: ComponentType,
  isAllowed: boolean,
  exact?: boolean,
}

const PrivateRoute = ({ isAllowed, path, component, exact }: Props) => {
  let Component = component
  return (
    <Route
      path={path}
      exact={exact}
    >
      {isAllowed ?
        <Component /> :
        <p className="private__not-allowed">Not allowed based on your role!</p>
      }
    </Route >
  )
}

export default PrivateRoute;