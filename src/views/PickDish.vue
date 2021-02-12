<template>
  <section>
    <div class="container pt-5">
      <div v-if="data != undefined" class="row">
        <div class="col-12 col-md-8">
          <div class="col-12">
            <div v-if="!loading" class="image-container">
              <img :src="data.img" alt="meal" />
            </div>
            <div v-else class="text-center pt-5">
              <div class="spinner-border " role="status"></div>
            </div>
          </div>
          <div class="col-12">
            <h2>
              {{ data.title }}
            </h2>
            <span class="badge badge-secondary">#{{ data.badge }}</span>
            <p class="pt-4">{{ data.description }}</p>
            <div class="text-right">
              <button class="btn btn_tertiary mt-3" @click="generateDish">
                Genereate new Dish
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4 mt-md-0">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Add to the order:</h4>
              <h6>1x {{ data.title }}</h6>
              <p class="card-text pb-3 ">
                Next step: pick a drink!
              </p>
              <button class="btn btn_primary" @click="next">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrderStore from "../store/OrderStore"
export default {
  name: "PickDish",
  data() {
    return {
      data: undefined,
      loading: false,
    }
  },
  mounted() {
    if (Object.keys(OrderStore.data.meal).length === 0) {
      this.loadData()
    } else {
      console.log("sellers is not empty !")
      this.data = OrderStore.data.meal
    }
  },
  methods: {
    loadData() {
      this.loading = true
      fetch("HTTPS://WWW.THEMEALDB.COM/API/JSON/V1/1/RANDOM.PHP")
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data
          const meal = {
            img: meals[0].strMealThumb,
            title: meals[0].strMeal,
            description: meals[0].strInstructions,
            badge: meals[0].strArea,
          }
          this.data = meal

          this.loading = false
        })
    },
    generateDish() {
      this.loadData()
    },
    next() {
      OrderStore.methods.addMeal(this.data)
      this.$router.push("/drink")
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.card {
  @media (min-width: 768px) {
    width: 18rem;
  }
}
</style>
