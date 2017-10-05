<template>
  <div>
    <h1>Portfolio</h1>
    <p v-if="!stocks.length">You have not yet purchased any stocks.</p>
    <app-portfolio-stock-item
      v-for="stock in stocks" 
      :key="stock.id"
      :id="stock.id"
      :symbol="stock.symbol"
      :shares="stock.quantity"
      :price="stock.price" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortfolioStockItem from './PortfolioStockItem.vue';

export default {
  name: 'PortfolioStock',
  components: {
    appPortfolioStockItem: PortfolioStockItem
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters('portfolio', [
      'stocks'
    ])
  }
}
</script>

<style>

</style>
