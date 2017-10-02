import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';
import Stocks from '../components/stocks/Stocks.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/stocks',
        component: Stocks,
        name: 'Stocks'
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'Portfolio'
    },
];


export default new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 })
  }); 