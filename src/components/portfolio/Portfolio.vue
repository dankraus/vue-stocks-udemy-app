<template>
  <div>
    <h1>Portfolio</h1>
    <p v-if="!stocks.length">You have not yet purchased any stocks.</p>
    <app-stock 
        v-for="stock in stocks" 
        :key="stock.id"
        :id="stock.id"
        :symbol="stock.symbol"
        :shares="stock.quantity"
        :price="stock.price"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters('portfolio', [
      'stocks'
    ])
  },
  components: {
    appStock: Stock
  }
}
</script>

<style>

</style>
