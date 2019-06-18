import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { MusicDetailBusiness, IMusicDetailBusiness } from '../../business/musicDetail';
import { AtTabBar } from 'taro-ui';
import { RouterType } from '../../common/enums';
import { routerMapping } from '../../common/utils';

import './index.scss'

interface IMusicDetailProps extends Partial<IMusicDetailBusiness> {

}

interface IMusicDetailState {
  current: RouterType;
}

interface MusicDetail {
  props: IMusicDetailProps;
  state: IMusicDetailState;
}

@inject(MusicDetailBusiness)
@observer
class MusicDetail extends Component {
  id: number = 0;
  songName: string = ''

  constructor(props) {
    super(props);

    this.state = {
      current: RouterType.Music
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

  componentWillMount() {
    console.log("params: ", this.$router.params);
    const { id, songName } = this.$router.params;

    this.id = id;
    this.songName = songName;
  }

  componentDidMount() {

  }

  currentChange = (current: number) => {
    Taro.redirectTo({
      url: routerMapping(current)
    })
  }

  render() {
    const { current } = this.state;

    return (
      <View className='index'>
        <Image src={'https://wx.yaoleyaotou.xin/file/music/1.jpg'} />
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

export default MusicDetail as ComponentType
