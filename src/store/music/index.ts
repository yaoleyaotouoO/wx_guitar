import { observable, action, runInAction }  from 'mobx';
import http, { Q } from '../../common/utils/http';
import { IMusic } from '../../common/interface/music';
import LoadingData from '../common/loadingData';

export default class MusicStore {
  @observable musicList: LoadingData<IMusic[]> = new LoadingData([]);

  @action
  async getMusicList() {
    const musicListPromise = this.api().getMusicList();
    const rawData = await musicListPromise;

    runInAction(() => {
      this.musicList.setLoadedData(rawData);
    });

    return musicListPromise;
  }

  api() {
    return {
      getMusicList: (): Promise<IMusic[]> => {
        return Q(http.get(`getMusicList`));
      }
    };
  }
}