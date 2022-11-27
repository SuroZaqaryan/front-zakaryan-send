import Vue from "vue";
import Vuex from "vuex";
import CallInfo from "@/store/modules/CallInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CallInfo
  },
});