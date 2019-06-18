import MusicStore from './music';
import MeStore from './me';
import MusicDetailStore from './musicDetail';

export class Store {
  meStore: MeStore;
  musicStore: MusicStore;
  musicDetailStore: MusicDetailStore;

  constructor() {
    this.meStore = new MeStore();
    this.musicStore = new MusicStore();
    this.musicDetailStore = new MusicDetailStore();
  }
}

export default new Store();