<template>
  <div v-if="OrderStore != undefined" class="container">
    <div class="row pt-5">
      <div class="col-12">
        <div class="text-right mb-4 mb-md-0">
          <button class="btn btn_primary" @click="next">Back to home</button>
        </div>
        <div class="receipt-wrapper d-flex justify-content-center">
          <div class="content">
            <div class="text-center">
              <img
                class="receipt-img"
                src="../assets/image/delivery.gif"
                alt="soon be delivered"
              />
            </div>
            <div class="receipt-body">
              <h2 class="text-center mt-0 mb-1">Thank you for your order</h2>
              <h3 class="text-center mt-1">
                The order will be soon on your table
              </h3>
              <ul class="order-receipt">
                <li>
                  <u>
                    Meal for {{ OrderStore.orderInfo.guests }}
                    <span>{{
                      OrderStore.orderInfo.guests > 1 ? "Guests" : "Guest"
                    }}</span></u
                  >
                </li>
                <li>1x {{ OrderStore.meal.title }}</li>
                <li>
                  <u> Drinks {{ OrderStore.drinks.selectedDrinks.length }}</u>
                </li>
                <li
                  v-for="drink in OrderStore.drinks.selectedDrinks"
                  :key="drink.id"
                >
                  1x {{ drink }}
                </li>
              </ul>
            </div>
            <div class="footer-receipt ">
              <div class="row align-items-end">
                <div class="col-6">
                  <p class="receipt-email mb-2">
                    {{ OrderStore.orderInfo.email }}
                  </p>
                  <p class="receipt-phone">
                    {{ OrderStore.orderInfo.date | convertDate }}
                  </p>
                </div>
                <div class="col-6">
                  <p class="receipt-amount">Total: $600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderStore from "../store/OrderStore"
export default {
  name: "Receipt",
  data() {
    return {
      OrderStore: undefined,
    }
  },
  filters: {
    convertDate: function(date) {
      let d = new Date(date)
      let month = "" + (d.getMonth() + 1)
      let day = "" + d.getDate()
      let year = d.getFullYear()

      if (month.length < 2) month = "0" + month
      if (day.length < 2) day = "0" + day

      return [day, month, year].join("-")
    },
  },
  mounted() {
    this.OrderStore = OrderStore.data
  },
  methods: {
    next() {
      localStorage.setItem("OrderMeal", JSON.stringify(OrderStore.data))
      OrderStore.methods.resetStore()
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_colors";
.receipt-wrapper {
  .content {
    border-radius: 5px;
    width: 400px;
    border: 1px solid #ccc;
    .order-receipt {
      li {
        margin-bottom: 1rem;
      }
    }
    .receipt-body {
      padding: 0 20px;
    }
    .receipt-img {
      max-width: 80%;
    }
    .footer-receipt {
      border-radius: 0 0 5px 5px;
      padding: 20px;

      background-color: #ccc;
      color: #333;
      .receipt-amount {
        font-size: 30px;
        text-align: right;
      }
    }
  }
}
</style>
