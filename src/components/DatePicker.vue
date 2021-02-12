<template>
  <div>
    <div>
      <v-date-picker
        :data-status="dateValidation"
        v-model="date"
        mode="dateTime"
        :min-date="new Date()"
        :disabled-dates="[{ weekdays: [1, 7] }]"
        :model-config="modelConfig"
        @input="onDateChange"
      />
    </div>
    <p v-if="dateValidation" class="error-message mt-3">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script>
import OrderStore from "../store/OrderStore"
export default {
  name: "DatePicker",
  props: ["minDate"],
  data() {
    return {
      date: null,
      errorMsg: "",
      dateValidation: false,
      modelConfig: {
        timeAdjust: "16:00:00",
      },
    }
  },
  mounted() {
    if (Object.keys(OrderStore.data.orderInfo).length != 0) {
      this.date = OrderStore.data.orderInfo.date
    }
  },
  methods: {
    onDateChange() {
      let choosenDate = new Date(this.date)
      let hours = choosenDate.getHours()
      let minutes = choosenDate.getMinutes()
      if (hours >= 16 && hours <= 22) {
        if (hours == 22 && minutes > 0) {
          console.log("object")
          this.errorMsg = "*We almost are closing"
          this.dateValidation = true
           this.$emit("update-date", undefined)
        } else {
          this.dateValidation = false
          this.$emit("update-date", this.date)
        }
      } else {
          this.$emit("update-date", undefined)
        this.errorMsg = " *Restaurant is open from 16:00 - 23:00 on weekdays"
        this.dateValidation = true
      }
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/css/_colors";
[data-status="true"] {
  .vc-select {
    border: 1px solid red;
  }
}
.error-message {
  width: 250px;
  color: $primaryColor;
  font-size: 15px;
  line-height: 20px;
}
</style>
