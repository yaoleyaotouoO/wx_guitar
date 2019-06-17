import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { MeBusiness, IMeBusiness } from '../../business/me';
import { AtTabBar } from 'taro-ui';
import { routerMapping } from '../../common/utils';

import './index.scss'
import { RouterType } from '../../common/enums';

interface IMeProps extends Partial<IMeBusiness> {

}

interface IMeState {
  current: RouterType;
}

interface Me {
  props: IMeProps;
  state: IMeState;
}

@inject(MeBusiness)
@observer
class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1
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

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  currentChange = (current: RouterType) => {
    console.log("current change: ", current);
    Taro.redirectTo({
      url: routerMapping(current)
    })
  }

  render() {
    const { current } = this.state;

    return (
      <View className='index'>
        <Text>Me</Text>
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

export default Me as ComponentType
