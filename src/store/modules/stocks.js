import baseStocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    randomizeStocks(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5 ));
        });
    }
};

const actions = {
    buyStock: ({ dispatch, commit, getters, rootGetters }, order) => {
        // console.log('buy stock stock stocks vuex')
        dispatch('portfolio/buyStock', order, {root: true});
    },
    initStocks: ({ commit }) => {
        commit('setStocks', baseStocks);
    },
    randomizeStocks:({ commit }) => {
        commit('randomizeStocks');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}