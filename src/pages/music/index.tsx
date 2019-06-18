import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { MusicBusiness, IMusicBusiness } from '../../business/music';
import { AtTabBar } from 'taro-ui';
import { Card } from '../../components';
import { RouterType } from '../../common/enums';
import { routerMapping } from '../../common/utils';
import { toJS } from 'mobx';

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

  componentDidMount() {
    const { getMusicList } = this.props;

    getMusicList();
  }

  currentChange = (current: number) => {
    Taro.redirectTo({
      url: routerMapping(current)
    })
  }

  seeMusic = (id: number) => {
    const { musicList } = this.props;

    const findMusic = toJS(musicList.data).find(music => music.id === id);

    Taro.redirectTo({
      url: `${routerMapping(RouterType.MusicDetai)}?id=${id}&songName=${findMusic.songName}`
    });
  }

  render() {
    const { current } = this.state;
    const { musicList } = this.props;

    return (
      <View className='index'>
        {
          musicList.data.map(music => {
            return <Card
              key={music.id}
              songName={music.songName}
              peopleName={music.peopleName}
              image={''}
              seeMusic={() => this.seeMusic(music.id)}
            />
          })
        }
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
