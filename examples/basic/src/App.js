import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withRouter, Outlet } from 'mobx-little-router-react'
import styled, { injectGlobal } from 'styled-components'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Viewport>
          <p>pathname: <b>{JSON.stringify(this.props.router.store.location.pathname)}</b></p>
          <Outlet />
        </Viewport>
      </div>
    )
  }
}

const Viewport = styled.div`
  padding: 18px;
`

injectGlobal`
  body {
    font-family: "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;

    * {
      box-sizing: border-box;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`

export default withRouter(observer(App))
