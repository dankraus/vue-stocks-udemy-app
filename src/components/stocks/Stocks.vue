<template>
  <div>
    <h1>Stocks</h1>
    <app-stock 
      v-for="stock in stocks" 
      :key="stock.id"
      :id="stock.id"
      :symbol="stock.symbol"
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
    ...mapGetters('stocks', [
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
