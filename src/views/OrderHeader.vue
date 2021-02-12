<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <h2>Order Details</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4">
        <p class="mb-3">Pick date and time</p>
        <DatePicker @update-date="getDate" />
      </div>
      <div class="col-12 col-md-6">
        <div>
          <p class="mb-3 mt-4 mt-md-0">Select amount of people</p>
          <div>
            <div class="guest-wrapper">
              <span @click="decrease" class="decrease">-</span>
              <span class="txt">{{ guests }}</span>
              <span @click="increase" class="increase">+</span>
            </div>
          </div>
          <FindOrder @get-email="getEmail" />
          <div  class="text-right">
            <button
              class="btn btn_primary"
              @click="next"
              :disabled="disableElem"
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2"></div>
    </div>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue"
import FindOrder from "@/components/FindOrder.vue"
import OrderStore from "../store/OrderStore"
export default {
  name: "OrderHeader",
  components: {
    DatePicker,
    FindOrder,
  },
  data() {
    return {
      email: undefined,
      date: undefined,
      guests: 1,
      disableElem:true
    }
  },
  mounted() {

    if (Object.keys(OrderStore.data.orderInfo).length != 0) {
      this.guests = OrderStore.data.orderInfo.guests
      this.date = OrderStore.data.orderInfo.date

    }
  },
  methods: {
    getDate(selectedDate) {
      if(this.email == undefined || selectedDate === undefined) {
        this.disableElem=true
      }else {
        this.disableElem= false
      }
      this.date = selectedDate
    },
    getEmail(email,isDisabledEmail) {
      this.disableElem = isDisabledEmail
      this.email = email
    },
    increase() {
      if (this.guests == 10) {
        return
      } else {
        this.guests++
      }
    },
    decrease() {
      if (this.guests != 1) {
        this.guests--
      } else {
        return
      }
    },
    next() {
      let personalInfo = {
        date: this.date,
        guests: this.guests,
        email: this.email,
      }
      OrderStore.methods.addOrderInfo(personalInfo)
      this.$router.push("/receipt")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_colors";
.guest-wrapper {
  width: 200px;
  height: 50px;
  background-color: rgb(231, 231, 231);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8.1rem;
  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
  .decrease,
  .increase {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: inherit;
    border: 2px solid $primaryColor;
    color: black;
    font-size: 45px;
    text-align: center;
    vertical-align: middle;
    line-height: 1;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: $primaryColor;
      color: white;
    }
  }
  .txt {
    color: #333;
    font-weight: bold;
    font-size: 25 px;
  }
}
</style>
