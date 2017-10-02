const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    buyStock(state, { id, quantity, price }) {
        const record = state.stocks.find(element => element.id == id);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({id, quantity});
        }

        state.funds -= price * quantity;
    },
    sellStock(state, {id, quantity, price}) {
        const record = state.stocks.find(element => element.id == id);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += price * quantity;
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        // console.log('portfolio - buy stock');
        commit('buyStock', order);
    },
    sellStock: ({commit}, order) => {
        commit('sellStock', order);
    }
};

const getters = {
    stocks: (state, getters, rootState) => {
        return state.stocks.map(portfolioStock => {
            const stock = rootState.stocks.stocks.find(element => element.id === portfolioStock.id);
            return {
                id: portfolioStock.id,
                quantity: portfolioStock.quantity,
                symbol: stock.symbol,
                price: stock.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
