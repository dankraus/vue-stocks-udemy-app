<template>
    <div class="container">
        <app-the-nav-header />
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavHeader from './components/TheNavHeader.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        appTheNavHeader: TheNavHeader
    },
    created() {
        this.initStocks();
    },
    methods: {
        ...mapActions('stocks', [
            'initStocks'
        ])
    }
}
</script>

<style scoped>
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-in 200ms ease-out reverse;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
