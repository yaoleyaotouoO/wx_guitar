import MusicStore from './music';
import MeStore from './me';

export class Store {
  musicStore: MusicStore;
  meStore: MeStore;

  constructor() {
    this.musicStore = new MusicStore();
    this.meStore = new MeStore();
  }
}

export default new Store();