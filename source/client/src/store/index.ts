import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './state';
import { certificates } from './modules/certificates';
import { auth } from './modules/auth';

Vue.use(Vuex);


const options: StoreOptions<RootState> = {
  state: {},
  modules: {
    auth,
    certificates
  }
};

export default new Vuex.Store(options);
