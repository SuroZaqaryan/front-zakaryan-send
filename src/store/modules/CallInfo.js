import { getField, updateField } from "vuex-map-fields";

export default {
    state: {

        form: {
            phone: '',
            name: '',
            email: '',
            country: ""
        },

        countries: [
            {id: 1, name: ' Москва '},
            {id: 2, name: ' Санкт - Петербург '},
            {id: 3, name: ' Казань '},
        ],
    },

    actions: {},

    mutations: {
        updateField,

        send(state) {
            console.log(state);
        }
    },

    getters: {
        getField
    },
};
