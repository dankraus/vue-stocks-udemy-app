<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link 
                    class="navbar-brand"
                    :to="{ name: 'Home' }">Stock Trader</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link 
                        tag="li"
                        class="nav-item"
                        :to="{ name: 'Portfolio' }"><a class="nav-link">Portfolio</a></router-link>
                    <router-link 
                        tag="li"
                        class="nav-item"
                        :to="{ name: 'Stocks' }"><a class="nav-link">Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a 
                            href="#" 
                            @click="endDay">End Day</a>
                    </li>
                    <li 
                        class="dropdown" 
                        :class="{ open: isDropdownOpen }"
                        @click="isDropdownOpen = !isDropdownOpen">
                    <a 
                        href="#" 
                        class="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save &amp; Load<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Save</a></li>
                        <li><a href="#">Load</a></li>
                    </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TheNavHeader',
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        ...mapGetters('portfolio', [
            'funds'
        ])
    }, 
    methods: {
        ...mapActions('stocks', [
            'randomizeStocks'
        ]),
        endDay() {
            this.randomizeStocks();
        }
    }
}
</script>

<style>

</style>
