import Vue from "vue";
import Vuex from "vuex";
/* eslint-disable */
import axios from "axios";

import { GET_TEMPLATE, DASHBOARD } from "./actions";

//USER STATES

Vue.use(Vuex);
export default new Vuex.Store({
  //initial state
  state: {
    templates: [],
  },
  getters: {
    templates: (state) => state.templates,
  },
  actions: {
    [DASHBOARD]: ({ commit, dispatch, state }) => {
      return new Promise((resolve, reject) => {
        const compare = (a, b) => {
          const A = a.name.toUpperCase();
          const B = b.name.toUpperCase();

          let comparison = 0;
          if (A > B) {
            comparison = 1;
          } else if (A < B) {
            comparison = -1;
          }
          return comparison;
        };

        axios("/test_data.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log("DASHBOARD", response);
            let data = response.data;

            let orderTemplates = [...data.templates];
            orderTemplates.sort(compare);

            console.log("orderTemplates", orderTemplates);

            commit("setTemplates", orderTemplates);

            resolve({ cid: data.cid, templates: orderTemplates });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    [GET_TEMPLATE]: ({ commit, state }, { tid }) => {
      return new Promise((resolve) => {
        console.log("templstes", state.templates);
        //find by id then resolve
      });
    },
  },
  mutations: {
    setTemplates: (state, templates) => {
      state.templates = templates;
    },
  },
});
