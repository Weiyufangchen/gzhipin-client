/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import {Button} from 'antd-mobile'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import Main from './containers/main/Main'
import Login from './containers/login/Login'
import Register from './containers/register/Register'

ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Main}/> {/*默认路径放最后，可以省略不写*/}
        </Switch>
      </HashRouter>
    </Provider>
  ), document.getElementById('root')
)