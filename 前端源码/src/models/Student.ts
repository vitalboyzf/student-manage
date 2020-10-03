import { EffectsCommandMap } from 'dva';

export default {
  state: {
    sum: 0,
    name: 'zf',
  },
  reducers: {
    increase(state: State) {
      return {
        ...state,
        sum: state.sum + 1,
      };
    },
    decrease(state: State) {
      return {
        ...state,
        sum: state.sum - 1,
      };
    },
  },
  effects: {
    * asyncIncrease(action: any, effectCom: EffectsCommandMap) {
      yield  effectCom.call(delay, 1000);
      yield effectCom.put({ type: 'increase' });
    },
  },
};

function delay(duration: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}