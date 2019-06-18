import { observable, action } from 'mobx';
import http, { Q } from '../../common/utils/http';

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

  @action
  async getMusicList() {
    const rawData = await this.api().getMusicList();
    console.log("getMusicList rawData: ", rawData);
  }

  api() {
    return {
      getMusicList: (): Promise<string> => {
        return Q(http.get(`GetMusicList`));
      }
    };
  }
}