<template>
  <div>
    <form>
      <div class="form-group ">
        <label for="email" class="form-label mb-2">Email</label>
        <input
          v-model="email"
          type="text"
          class="form-control"
          :class="{ error: isError }"
          id="email"
          placeholder="email@example.com"
          @input="onEmailChange"
          @blur="validateEmail"
        />
        <p v-if="isError" class="text-danger mt-3">
          Enter valid email
        </p>
      </div>
    </form>
    <button v-if="findEmail" @click="findOrder" class="btn btn_primary">
      Find
    </button>
  </div>
</template>
<script>
import OrderStore from "../store/OrderStore"
export default {
  name: "FindOrder",
  props: ["findEmail"],
  data() {
    return {
      email: "",
      isError: false,
      loadData: false,
    }
  },
  watch: {
    loadData(newValue) {
      if (newValue) {
        this.$emit("get-email", this.email)
      }
    },
  },
  mounted() {
    if (Object.keys(OrderStore.data.orderInfo).length != 0) {
      this.loadData = true
      this.email = OrderStore.data.orderInfo.email
    }
  },
  methods: {
    onEmailChange(event) {
      this.validateEmail(event.target.value)
      this.$emit("get-email", event.target.value,this.isError)
    },
    validateEmail() {
      this.isError = true
      const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (validEmail.test(this.email.toLowerCase())) {
        this.isError = false
      }
    },
    findOrder() {
      this.$emit("find-email", this.email)
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid red;
}
</style>
