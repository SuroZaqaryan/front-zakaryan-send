import { getField, updateField } from "vuex-map-fields";
import api from "@/api/api";
import Vue from "vue";

export default {
  state: {
    form: {
      phone: "",
      name: "",
      email: "",
      city_id: "",
    },

    countries: [
      { id: 1, name: "Москва" },
      { id: 2, name: "Санкт - Петербург" },
      { id: 3, name: "Казань" },
    ],

    isEmpty: false,
  },

  actions: {
    checkCountry: ({ commit }, payload) => commit("CHECK_COUNTRY", payload),

    send({ commit }, payload) {
      api
        .post("/test-tasks/front/task-7/", payload)
        .then((res) => {
          commit("VALIDATE", { data: res.data, type: "success" });
        })
        .catch((err) => {
          commit("VALIDATE", { data: err.response.data, type: "warn" });
        });
    },
  },

  mutations: {
    updateField,

    CHECK_COUNTRY(state, payload) {
      state.countries.find((elem) => {
        if (elem.name === payload) state.form.city_id = elem.id;
      });
    },

    VALIDATE(state, payload) {
      state.isEmpty = true;

      Vue.notify({
        group: "foo",
        text: payload.data,
        duration: 2000,
        type: payload.type,
        position: "top right",
      });
    },
  },

  getters: {
    getField,

    isEmpty(state) {
      return state.isEmpty;
    },
  },
};
