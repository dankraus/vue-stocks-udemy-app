<template>
  <div class="col-sm-6 col-md-4 Stock">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ symbol }}
          <small>(Price: {{ price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          shares: {{ shares }}
          price: {{ price }}
          value: {{ value }}
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            :class="{ danger: hasInsufficentShares }"
            v-model="quantity">

            <transition name="bounce">
              <div v-if="isSold" class="sold">Sold!</div>
            </transition>
            <transition name="bounce">
              <div v-if="hasInsufficentShares" class="insufficentShares">Insufficent Shares!</div>
            </transition>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-primary"
            @click="sellStock"
            :disabled="this.quantity <= 0 || hasInsufficentShares"
            >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PortfolioStockItem',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    shares: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quantity: 0,
      isSold: false
    }
  },
  computed: {
    value() {
     return this.price * this.shares
    },
    hasInsufficentShares() {
      return this.quantity > this.shares;
    }
  },
  methods: {
    ...mapActions('portfolio', {
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        id: this.id, 
        quantity: this.quantity,
        price: this.price
      };

      this.placeSellOrder(order);
      this.quantity = 0;
      // this.$store.dispatch('portfolio/sellStock', order, {root:true});

      this.isSold = true;
      setTimeout(() => {
        this.isSold = false;
      }, 1500);
    }
  }
}
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }

  .sold {
    position: absolute;
    color: green;
    text-transform: uppercase;
    font-weight: bold;
    font-size: x-small;
  }

  .insufficentShares {
    position: absolute;
    color: red;
    text-transform: uppercase;
    font-weight: bold;
    font-size: x-small;
  }

  .danger {
    border: 1px solid red;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
