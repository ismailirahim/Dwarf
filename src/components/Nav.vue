<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand logo" to="/"
        ><img src="../assets/image/logo.png" alt="beach_logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active ">
            <router-link class="nav-link text-uppercase" to="/"
              >Restauranter</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase" to="/"
              >Produkter</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase" to="/"
              >Nyhedsbrev</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase" to="/"
              >Kontakt</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String,
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/css/_colors";
.logo {
  img {
    width: 65px;
  }
}
.nav-link {
  color: $primaryColor !important;
  &:hover {
    opacity: 0.7;
  }
}
</style>
