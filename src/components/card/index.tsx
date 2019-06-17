import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import defaultGuitarPng from '../../images/default-guitar.png';

import './index.scss';
import { AtIcon } from 'taro-ui';

interface ICardProps {
  songName: string;
  peopleName: string;
  image: string;
}

interface ICardState {
}

class Card extends Component<ICardProps, ICardState> {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  collect = () => {
    console.log("collect 111");
  }

  render() {
    const { songName, peopleName, image } = this.props;

    return (
      <View className='at-row card'>
        <View className='at-col at-col-4'>
          <Image className='card-border' src={image || defaultGuitarPng} />
        </View>
        <View className='at-col at-col-8 card-right'>
          <Text>{songName}</Text>
          <View className='at-row at-row__justify--between card-bottom-right'>
            <View className='at-col at-col-5'>
              <Text className='card-people-name'>{peopleName}</Text>
            </View>
            <View className='at-col at-col-5 card-heart'>
              <AtIcon value='heart' size='30' color='#F00' onClick={this.collect} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Card;
