<template>
  <div
    class="order-flow text-center h-100 d-flex flex-column justify-content-between"
  >
    <h2 class="text-left text-white">
    Order Flow Box
    </h2>
    <div class="d-flex justify-content-center">
    
    </div>
    <button class="btn btn_secondary " @click="redirectOrder">Order</button>
  </div>
</template>

<script>
import OrderStore from "../store/OrderStore"
export default {
  name: "Order",
methods: {
    redirectOrder() {
      OrderStore.methods.resetStore()
        this.$router.push('/pick-dish');
    }
},
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_colors";
.order-flow {
  border:1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  background-image: url('../assets/image/dish_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
 
}
</style>
