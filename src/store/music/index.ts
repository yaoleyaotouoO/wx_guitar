import { observable, action } from 'mobx';

export default class MusicStore {
  @observable counter: number = 0;

  increment() {
    console.log("xxx increment this: ", this);
    this.counter++;
  }

  @action
  decrement() {
    console.log("xxx decrement");
    this.counter--;
  }

  @action
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  }

}