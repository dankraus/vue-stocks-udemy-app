import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHomePage from '../components/TheHomePage.vue';
import PortfolioStocks from '../components/portfolio/PortfolioStocks.vue';
import StockList from '../components/stocks/StockList.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        component: TheHomePage,
        name: 'Home'
    },
    {
        path: '/stocks',
        component: StockList,
        name: 'Stocks'
    },
    {
        path: '/portfolio',
        component: PortfolioStocks,
        name: 'Portfolio'
    },
];


export default new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 })
  }); 