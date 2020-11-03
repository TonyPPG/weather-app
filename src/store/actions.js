/*
Action build for fetch data through api url
*/

import Vue from "vue";

//wont work since the api address hasn't enable CORS
export const loadWeathers = ({ commit }) => {
  Vue.http
    .get("http://dnu5embx6omws.cloudfront.net/venues/weather.json")
    .then(response => response.json())
    .then(data => {
      if (data) {
        const weathers = data.weathers;

        commit("SET_WEATHERS", weathers);
      }
    });
};
