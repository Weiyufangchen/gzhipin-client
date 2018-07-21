/*
redux最核心的store对象模块
集中式管理所有的状态
API：
  store.getState()
  store.dispatch()
  store.subscribe()
 */
//引入创建store对象的模块
import {createStore, applyMiddleware} from 'redux'
//引入异步模块
import thunk from 'redux-thunk'
//引入混合调试工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入reducer函数
import reducers from './reducers'
//创建store对象，传入reducer函数，并暴露
export default  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
