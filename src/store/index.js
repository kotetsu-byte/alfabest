import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const store = new Vuex.Store({
    state() {
        return {
            langs: {
                0: 'ru',
                1: 'uz'
            },
            selectedLang: 'ru'
        }
    },
    getters: {
        getSelectedLang: state => {
            return state.selectedLang;
        }
    },
    mutations: {
        setLang(state, payload) {
            state.selectedLang = state.langs[payload];
        }
    },
    actions: {
        setLang({commit}, payload) {
            commit('setLang', payload);
        }
    },
    plugins: [new VuexPersistence().plugin]
})

export default store;