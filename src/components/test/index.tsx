import { ComponentType } from 'react';
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface ITestProps {

}

interface ITestState {
}

interface Test {
  props: ITestProps;
  state: ITestState;
}

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <View>

      </View>
    )
  }
}

export default Test as ComponentType
