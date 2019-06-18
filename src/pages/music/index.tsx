import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { MusicBusiness, IMusicBusiness } from '../../business/music';
import { AtTabBar } from 'taro-ui';
import { Card } from '../../components';
import { RouterType } from '../../common/enums';
import { routerMapping } from '../../common/utils';

import './index.scss'

interface IMusicProps extends Partial<IMusicBusiness> {

}

interface IMusicState {
  current: RouterType;
}

interface Music {
  props: IMusicProps;
  state: IMusicState;
}

@inject(MusicBusiness)
@observer
class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

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

  componentDidMount() {
    const { getMusicList } = this.props;

    getMusicList();
  }

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

  currentChange = (current: number) => {
    console.log("current change: ", current);
    Taro.redirectTo({
      url: routerMapping(current)
    })
  }

  render() {
    const { current } = this.state;
    const { counter } = this.props;

    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter()}</Text>

        <Card
          songName={'鸽子'}
          peopleName={'test'}
          image={''}
        />

        <AtTabBar
          fixed
          tabList={[
            { title: '曲谱', iconType: 'bullet-list' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.currentChange}
          current={current}
        />
      </View>
    )
  }
}

export default Music as ComponentType
