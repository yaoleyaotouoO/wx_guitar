import { IStoreContainer } from '../../common/interface';

export const MusicDetailBusiness = ({ store }: IStoreContainer): IMusicDetailBusiness => {
  const { musicDetailStore } = store;

  const propsConnect = {
  };

  const dispatchConnect = {
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IMusicDetailBusiness {
}