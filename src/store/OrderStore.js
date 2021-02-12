const OrderStore = {
  data: {
    meal: {},
    drinks: {},
    orderInfo: {},
  },
  methods: {
    addMeal(meal) {
      OrderStore.data.meal = meal
    },
    addDrinks(drinks) {
      OrderStore.data.drinks = drinks
    },
    addSelectedDrinks(id) {
      let index = OrderStore.data.drinks.selectedDrinks.indexOf(id)

      if (index === -1) {
        OrderStore.data.drinks.selectedDrinks.push(id)
      } else {
        OrderStore.data.drinks.selectedDrinks.splice(index, 1)
      }
    },
    addOrderInfo(personalInfo) {
      OrderStore.data.orderInfo = personalInfo
    },
    updateStore(order) {
      const { meal, drinks, orderInfo } = order
      this.addMeal(meal)
      this.addDrinks(drinks)
      this.addOrderInfo(orderInfo)
    },
    resetStore() {
      this.addMeal({})
      this.addDrinks({})
      this.addOrderInfo({})
    },
  },
}
export default OrderStore
