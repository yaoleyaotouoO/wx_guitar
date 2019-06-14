import { IStoreContainer } from 'src/common/interface';

export const IndexBusiness = ({ store }: IStoreContainer): IIndexBusiness => {
  const propsConnect = {
    counter: store.indexStore.counter
  };

  const dispatchConnect = {
    increment: () => store.indexStore.increment(),
    decrement: () => store.indexStore.decrement(),
    incrementAsync: () => store.indexStore.incrementAsync()
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IIndexBusiness {
  counter: number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
}