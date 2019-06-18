import { IStoreContainer } from '../../common/interface';
import { IMusic } from '../../common/interface/music';
import LoadingData from '../../store/common/loadingData';

export const MusicBusiness = ({ store }: IStoreContainer): IMusicBusiness => {
  const { musicStore } = store;

  const propsConnect = {
    musicList: musicStore.musicList
  };

  const dispatchConnect = {
    getMusicList: () => musicStore.getMusicList()
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IMusicBusiness {
  musicList: LoadingData<IMusic[]>;
  getMusicList: () => Promise<IMusic[]>;
}