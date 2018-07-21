import React, {Component} from 'react'
import {WingBlank,WhiteSpace,Button} from 'antd-mobile'

export default class Main extends Component {
  render () {
    return (
      <div>
        <WingBlank>
          <WhiteSpace />
          <Button type='primary'>Main</Button>
        </WingBlank>
      </div>
    )
  }
}