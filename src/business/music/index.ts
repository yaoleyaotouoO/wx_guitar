import { IStoreContainer } from '../../common/interface';

export const MusicBusiness = ({ store }: IStoreContainer): IMusicBusiness => {
  const { musicStore } = store;

  const propsConnect = {
    // counter: musicStore.counter,
  };

  const dispatchConnect = {
    counter: () => musicStore.counter,
    increment: () => musicStore.increment(),
    decrement: () => musicStore.decrement(),
    incrementAsync: () => musicStore.incrementAsync()
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IMusicBusiness {
  // counter: number;
  counter: () => number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
}