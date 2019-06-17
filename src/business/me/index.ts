import { IStoreContainer } from '../../common/interface';

export const MeBusiness = ({ store }: IStoreContainer): IMeBusiness => {
  const { meStore } = store;

  const propsConnect = {
  };

  const dispatchConnect = {
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IMeBusiness {

}