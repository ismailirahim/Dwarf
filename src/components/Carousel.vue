<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-interval="2500"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100 test"
          src="../assets/image/dish_1.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../assets/image/dish_2.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../assets/image/dish_3.jpg"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
}
</script>

<style lang="scss" scoped>
.carousel {
  border-radius: 5px;
  .carousel-inner {
    height: 400px;
    @media (max-width: 767px) {
      height: unset;
    }
    img {
      border-radius: 5px;
      height: 400px;
      @media (max-width: 767px) {
        height: unset;
      }
    }
  }
}
</style>
