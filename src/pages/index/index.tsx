import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { IndexBusiness, IIndexBusiness } from '../../business/index';

import './index.scss'

// type PageStateProps = {
//   counterStore: {
//     counter: number,
//     increment: Function,
//     decrement: Function,
//     incrementAsync: Function
//   }
// }

interface PageStateProps extends Partial<IIndexBusiness> {

}

interface Index {
  props: PageStateProps;
}

@inject(IndexBusiness)
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { increment } = this.props
    increment()
  }

  decrement = () => {
    const { decrement } = this.props
    decrement()
  }

  incrementAsync = () => {
    const { incrementAsync } = this.props
    incrementAsync()
  }

  render() {
    const { counter } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index as ComponentType
