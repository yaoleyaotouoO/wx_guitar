import { observable } from 'mobx';

export default class IndexStore {
  @observable counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  }

}