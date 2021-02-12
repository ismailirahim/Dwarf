<template>
  <section>
    <div v-if="data != undefined" class="container">
      <div class="row pt-5">
        <div class="col-12 col-md-8 ">
          <div class="drink-container">
            <ul class="m-0">
              <li
                v-for="drink in data.drinksList"
                :key="drink.id"
                @click="selectDrinks(drink.name)"
                :class="{
                  selected: data.selectedDrinks.includes(drink.name),
                }"
              >
                <div class="image-wrapper">
                  <img :src="drink.image_url" :alt="drink.tagline" />
                  <span class="drink-label pl-1">{{ drink.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Add to the order:
              </h4>
              <h6>1x {{ title }}</h6>
              <h6 v-for="drink in data.selectedDrinks" :key="drink">
                1x {{ drink }}
              </h6>
              <p class="card-text pb-3 ">
                Next step: proceed to order!
              </p>
              <button
                class="btn btn_primary"
                :disabled="data.selectedDrinks.length == 0"
                @click="next"
              >
                Proceed
              </button>
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
  name: "Drinks",
  data() {
    return {
      loading: false,
      data: undefined,
      title: "",
    }
  },
  mounted() {
    if (Object.keys(OrderStore.data.drinks).length === 0) {
      this.loadData()
    } else {
      this.data = OrderStore.data.drinks
    }
    this.title = OrderStore.data.meal.title
  },
  methods: {
    loadData() {
      this.loadData = true
      fetch("HTTPS://API.PUNKAPI.COM/V2/BEERS")
        .then((response) => response.json())
        .then((value) => {
          let drinks = {
            drinksList: value,
            selectedDrinks: [],
          }
          OrderStore.methods.addDrinks(drinks)
          console.log("drinks", OrderStore)
          this.data = OrderStore.data.drinks

          this.loadData = false
        })
    },
    selectDrinks(name) {
      OrderStore.methods.addSelectedDrinks(name)
    },
    next() {
      this.$router.push("/pick-date")
    },
  },
}
</script>

<style lang="scss" scoped>
.drink-container {
  height: calc(100vh - 150px);
  overflow-y: scroll;
  @media (max-width: 767px) {
    overflow-y: unset;
    height: unset;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 32px 0;

    li {
      margin: 0px 0px 20px 10px;
      flex-basis: calc(50% - 20px);
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: #f1f1f1;
        img {
          transform: scale(1.1);
        }
      }
      .image-wrapper {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-areas: "image text";
        padding: 1rem;
        img {
          grid-area: image;
          height: 150px;
          margin: 0 auto;
          width: auto;
          transition: all 0.5s ease-in-out;
        }
        .drink-label {
          grid-area: text;
        }
        @media (max-width: 767px) {
          grid-template-columns: 100%;
          grid-template-areas: "image" "text";
          grid-gap: 0.5rem;
          justify-items: center;
        }
      }
    }
    .card {
      @media (min-width: 768px) {
        width: 18rem;
      }
    }
    .selected {
      // background-color: rgba(0, 128, 0, 0.6);
      border: 1px solid #333;
      background-color: #f1f1f1;
    }
  }
}
</style>
