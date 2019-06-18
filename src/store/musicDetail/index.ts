import { observable, action, runInAction } from 'mobx';
import http, { Q } from '../../common/utils/http';
import LoadingData from '../common/loadingData';

export default class MusicDetailStore {
  @observable musicData: LoadingData<any> = new LoadingData({});

  @action
  async getMusicData() {
    const musicDataPromise = this.api().getMusicData();
    const rawData = await musicDataPromise;

    runInAction(() => {
      this.musicData.setLoadedData(rawData);
    });

    return musicDataPromise;
  }

  api() {
    return {
      getMusicData: (): Promise<any> => {
        return Q(http.get(`getMusicData`));
      }
    };
  }
}