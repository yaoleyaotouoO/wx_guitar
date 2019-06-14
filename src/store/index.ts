import IndexStore from './index/index';

export class Store {
  indexStore: IndexStore;

  constructor() {
    this.indexStore = new IndexStore();
  }
}

export default new Store();