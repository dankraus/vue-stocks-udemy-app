<template>
  <div class="col-sm-6 col-md-4 Stock">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ symbol }}
          <small>(Price: {{ price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            :class="{ danger: hasInsufficentFunds }"
            v-model="quantity">

          <transition name="bounce">
            <div v-if="isPurchased" class="purchased">Purchased!</div>
          </transition>
          <transition name="bounce">
            <div v-if="hasInsufficentFunds" class="insufficentFunds">Insufficent Funds!</div>
          </transition>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="this.quantity <= 0 || hasInsufficentFunds"
            >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
    }
  },
  data() {
    return {
      quantity: 0,
      isPurchased: false
    };
  },
  computed: {
    ...mapGetters('portfolio', [
      'funds'
    ]),
    hasInsufficentFunds() {
      return this.quantity * this.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        id: this.id,
        price: this.price,
        quantity: parseInt(this.quantity)
      };
      
      this.$store.dispatch('stocks/buyStock', order, {root:true});
      
      this.quantity = 0;

      this.isPurchased = true;
      setTimeout(() => {
        this.isPurchased = false;
      }, 1500);
    }
  }
}
</script>

<style scoped>
  .purchased {
    position: absolute;
    color: green;
    text-transform: uppercase;
    font-weight: bold;
    font-size: x-small;
  }

  .insufficentFunds {
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
