<template>
  <section>
    <div class="container">
      <div class="row pt-5">
        <div class="col-12 col-md-8 mb-3 mb-md-0">
          <Carousel />
        </div>
        <div class="col-12 col-md-4">
          <Order />
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <h2 class="mt-0">
            Find Your Order
          </h2>
          <div class="w-100 w-md-75 ">
            <FindOrder :findEmail="true" @find-email="findOrder" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <ContentBox />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Carousel from "../components/Carousel"
import Order from "../components/Order.vue"
import FindOrder from "../components/FindOrder"
import ContentBox from "../components/ContentBox.vue"
import OrderStore from "../store/OrderStore"

export default {
  name: "Home",
  components: {
    Carousel,
    Order,
    FindOrder,
    ContentBox,
  },
  methods: {
    findOrder(email) {
      let order = JSON.parse(localStorage.getItem("OrderMeal"))
      if (order.orderInfo.email === email) {
        OrderStore.methods.updateStore(order)
        console.log(OrderStore)
        this.$router.push("/pick-dish")
      } else {
        alert("Order not founded")
      }
    },
  }
}
</script>
