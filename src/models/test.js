import find from '@/services/test';

export default {
  namespace: 'test',

  state: {
    status: [],
  },

  effects: {
    *test(_, { call, put }) {
      const response = yield call(find);
      if (response.errCode === 0) {
        yield put({
          type: 'save',
          payload: {
            status: response.result.users,
          },
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
