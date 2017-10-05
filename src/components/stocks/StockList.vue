<template>
  <div>
    <h1>Stocks</h1>
    <app-stock-item 
      v-for="stock in stocks" 
      :key="stock.id"
      :id="stock.id"
      :symbol="stock.symbol"
      :price="stock.price"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StockItem from './StockItem.vue';

export default {
  name: 'StockList',
  components: {
    appStockItem: StockItem
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters('stocks', [
      'stocks'
    ])
  }
}
</script>

<style>

</style>
